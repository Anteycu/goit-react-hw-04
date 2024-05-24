import { useState } from "react";
import Modal from "react-modal";
import ImageModal from "../ImageModal/ImageModal";
import css from "./ImageCard.module.css";

Modal.setAppElement("#root");

const ImageCard = ({ imgInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { alt_description, urls, description, tags, width, height } = imgInfo;
  return (
    <div>
      <img
        className={css.cardImg}
        src={urls.small}
        alt={alt_description}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <p>
        {width}x{height}
      </p>
      {/* <p>{description ? description : "Imagine here best description ever"}</p> */}
      <ul className={css.tagsList}>
        {tags.map(({ title }, index) => {
          return (
            <li key={index}>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
      {/* <a href={links.download} type="image">
        Download
      </a> */}
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ImageModal modalInfo={imgInfo} />
      </Modal>
    </div>
  );
};

export default ImageCard;
