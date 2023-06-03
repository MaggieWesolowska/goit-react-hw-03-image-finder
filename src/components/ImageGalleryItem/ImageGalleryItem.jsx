import propTypes from 'prop-types';

export const GalleryItem = ({ image, onClick }) => (
  <li id={image.id} onClick={onClick}>
    <img src={image.webformatURL} alt={image.tags} name={image.largeImageURL} />
  </li>
);

GalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
};
