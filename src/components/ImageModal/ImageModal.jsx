import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ modalInfo, isOpen, setIsOpen }) => {
  const { alt_description, urls, width, height } = modalInfo;

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <img src={urls.regular} alt={alt_description} />
      <p>
        {width}x{height}
      </p>
    </Modal>
  );
};

export default ImageModal;
