import propTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ src, alt, handleClose }) => {
  <div className={css.overlay} onCLick={handleClose}>
    <div className={css.modal}>
      <img src={src} alt={alt} />
    </div>
  </div>;
};

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};
