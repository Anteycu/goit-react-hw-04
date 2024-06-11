import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import onImgRequest from "../searchImgApi";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoaderMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

Modal.setAppElement("#root");

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalPhoto, setModalPhoto] = useState(false);

  function fetchPhotos(searchWord, currentPage) {
    return onImgRequest(searchWord, currentPage)
      .then(({ data }) => {
        setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const onSearchHandler = searchWord => {
    setLoading(true);
    setError(false);
    setPhotos([]);
    setPage(1);
    setQuery(searchWord);

    fetchPhotos(searchWord, page);
  };

  const onLoadMoreHandler = () => {
    setLoading(true);
    const currentPage = page + 1;
    setPage(currentPage);

    fetchPhotos(query, currentPage);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSearch={onSearchHandler} />
      {error && <ErrorMessage message={error} />}
      {photos.length > 0 && !error && (
        <ImageGallery photoList={photos} onModalPhoto={setModalPhoto} />
      )}
      {loading && <Loader />}
      {!loading && photos.length > 0 && !error && (
        <LoaderMoreBtn onLoadMore={onLoadMoreHandler} />
      )}
      <Modal
        isOpen={Boolean(modalPhoto)}
        onRequestClose={() => setModalPhoto(null)}
        className="modal"
        preventScroll={true}
      >
        {modalPhoto && <ImageModal modalInfo={modalPhoto} />}
      </Modal>
    </>
  );
}

export default App;
