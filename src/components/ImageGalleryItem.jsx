export const GalleryItem = ({ webformatURL }) => {
  return (
    <li class="gallery-item">
      <img src={webformatURL} alt="" width="200" />
    </li>
  );
};
