import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

export function ImageGalleryItem({ url, title }) {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={title} className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
