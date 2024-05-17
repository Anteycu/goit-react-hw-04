import { useState } from "react";
import onImgRequest from "../searchImgApi";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";

function App() {
  const [photos, setPhotos] = useState([]);

  const onSubmitHandler = searchWord => {
    onImgRequest(searchWord).then(({ data }) => {
      setPhotos(data.results);
    });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmitHandler} />
      {photos.length > 0 && <ImageGallery photoList={photos} />}
    </>
  );
}

export default App;
