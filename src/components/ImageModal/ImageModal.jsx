import css from "./ImageModal.module.css";

const ImageModal = ({ modalInfo }) => {
  const { alt_description, urls, width, height } = modalInfo;

  return (
    <div className={css.thumb}>
      <img src={urls.regular} alt={alt_description} className={css.img} />
      <p>
        {width}x{height}
      </p>
    </div>
  );
};

export default ImageModal;
