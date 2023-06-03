import propTypes from 'prop-types';
import { GalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul>
    {images.map((image, index) => (
      <GalleryItem
        key={index}
        image={image}
        onClick={onImageClick}
      ></GalleryItem>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
  onImageClick: propTypes.func.isRequired,
};
