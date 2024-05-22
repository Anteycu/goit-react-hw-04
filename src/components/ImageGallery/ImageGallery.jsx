import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photoList, imgInfoHandler }) => {
  return (
    <ul>
      {photoList.map(({ id, ...props }) => (
        <li key={id}>
          <ImageCard imgInfo={props} imgInfoHandler={imgInfoHandler} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
