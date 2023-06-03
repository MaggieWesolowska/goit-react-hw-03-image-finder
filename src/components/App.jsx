import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages } from './Api/fetchImages';
import React from 'react';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    pageNr: 1,
    isLoading: false,
    isModalOpen: false,
    modalImg: '',
    modalAlt: '',
  };

  onSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const searchInput = e.target.elements.searchInput;
    if (searchInput.value.trim() === '') {
      return;
    }
    const response = await fetchImages(searchInput.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      searchQuery: searchInput.value,
      pageNr: 1,
    });
  };

  handleMoreButton = async () => {
    const response = await fetchImages(
      this.state.searchQuery,
      this.state.pageNr + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      pageNr: this.state.pageNr + 1,
    });
  };

  handleImageClick = e => {
    this.setState({
      isModalOpen: true,
      modalAlt: e.target.alt,
      modalImg: e.target.name,
    });
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.handleModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div>
            <Searchbar onSubmit={this.onSubmit} />
            <ImageGallery
              images={this.state.images}
              onImageClick={this.handleImageClick}
            />
            {this.state.images.length > 0 ? (
              <Button onClick={this.handleMoreButton} />
            ) : null}
          </div>
        )}
        {this.state.isModalOpen ? (
          <Modal
            src={this.state.modalImg}
            alt={this.state.modalAlt}
            handleClose={this.handleModalClose}
          />
        ) : null}
      </div>
    );
  }
}
