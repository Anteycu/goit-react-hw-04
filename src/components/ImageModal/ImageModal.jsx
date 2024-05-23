const ImageModal = ({ modalInfo }) => {
  const { alt_description, urls, width, height } = modalInfo;

  return (
    <div>
      <img src={urls.regular} alt={alt_description} />
      <p>
        {width}x{height}
      </p>
    </div>
  );
};

export default ImageModal;
