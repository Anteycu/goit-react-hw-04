import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photoList, onModalPhoto }) => {
  return (
    <ul className={css.imageList}>
      {photoList.map(({ id, ...props }) => (
        <li key={id} >
          <ImageCard imgInfo={props} onModalPhoto={onModalPhoto} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
