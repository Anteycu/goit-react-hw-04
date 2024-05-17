import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photoList }) => {
  return (
    <ul>
      {photoList.map(({ id, ...props }) => (
        <li key={id}>
          <ImageCard imgInfo={props} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
