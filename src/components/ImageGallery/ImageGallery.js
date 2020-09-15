import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

export const ImageGallery = ({ images, toggleModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        url={webformatURL}
        largeImageURL={largeImageURL}
        title={tags}
        toggleModal={toggleModal}
        id={id}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
