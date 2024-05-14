import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

export function ImageGalleryItem({
  url,
  title,
  toggleModal,
  id,
  largeImageURL,
}) {
  return (
    <li className="ImageGalleryItem" onClick={() => toggleModal(largeImageURL)}>
      <img src={url} alt={title} className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  toggleModal: PropTypes.func,
  largeImageURL: PropTypes.string,
};
