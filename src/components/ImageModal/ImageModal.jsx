import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ modalInfo, setModalInfo }) => {
  const { alt_description, urls, width, height } = modalInfo;

  const onOpen = modalInfo => {
    return modalInfo ? true : false;
  };

  const onClose = () => {
    setModalInfo(null);
  };

  return (
    <div>
      <Modal isOpen={onOpen(modalInfo)} onRequestClose={onClose}>
        <img src={urls.regular} alt={alt_description} />
        <p>
          {width}x{height}
        </p>
      </Modal>
    </div>
  );
};

export default ImageModal;
