import { useState } from "react";
import { Toaster } from "react-hot-toast";
import onImgRequest from "../searchImgApi";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const onSubmitHandler = searchWord => {
    setLoading(true);

    onImgRequest(searchWord)
      .then(({ data }) => {
        setPhotos(data.results);
      })
      .catch(err => {
        // setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={onSubmitHandler} />
      {photos.length > 0 && <ImageGallery photoList={photos} />}
      {loading && <Loader />}
    </>
  );
}

export default App;
