import propTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  <header class="searchbar">
    <form class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        onChange={onSubmit}
      />
    </form>
  </header>;
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
