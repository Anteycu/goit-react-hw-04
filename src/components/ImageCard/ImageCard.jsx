import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

const ImageCard = ({ imgInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { alt_description, urls, description, tags, width, height } = imgInfo;
  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <p>
        {width}x{height}
      </p>
      <p>{description ? description : "Imagine here best description ever"}</p>
      <ul>
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
      <ImageModal modalInfo={imgInfo} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ImageCard;
