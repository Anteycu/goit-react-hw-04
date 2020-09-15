import React, { Component } from "react";
import { Modal } from "./Modal/Modal";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loaders } from "./Loader/Loaders";
import { Notification } from "./Notification";
import { fetchImagesWithQuery } from "../helpers/imagesApi";
import { SearchBar } from "./SearchBar/SearchBar";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    images: [],
    loading: false,
    showModal: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  toggleModal = (largeImageURL) => {
    this.setState((state) => ({
      showModal: !state.showModal,
      largeImageURL,
    }));
  };

  setLargeImage = (url) => {
    this.setState({ largeImageUrl: url });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState(
          (prevState) => ({
            images: [...prevState.images, ...images],
            page: prevState.page + 1,
          }),
          console.log(images)
        )
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchBarSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  render() {
    const { showModal, loading, images, error, largeImageURL } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSearchBarSubmit} />

        {error && (
          <Notification
            message={`Whoops, some trouble on horizont: ${error.message}`}
          />
        )}

        {images.length > 0 && (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}

        {loading && <Loaders message="Loading..." />}

        {images.length > 0 && !loading && (
          <Button handleFetch={this.fetchImages} />
        )}

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </>
    );
  }
}
