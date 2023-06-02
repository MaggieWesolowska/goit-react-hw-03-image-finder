import propTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul class="gallery">
      {pictures.map(picture => (
        <GalleryItem key={picture.id} src={picture.webformatURL}></GalleryItem>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      webformatURL: propTypes.string.isRequired,
    })
  ),
};
