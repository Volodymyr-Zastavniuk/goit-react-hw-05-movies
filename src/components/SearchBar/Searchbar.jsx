import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import './Searchbar.css';
// isLoading;
export default function Searchbar({ query, onSubmit }) {
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedQuery = searchQuery.toLowerCase().trim();

    if (normalizedQuery === '') {
      return alert('Please enter movie to find');
    }
    onSubmit({ query: normalizedQuery });
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={event => setSearchQuery(event.currentTarget.value)}
        maxLength={30}
      />
      {/* disabled={isLoading} */}
      <button type="submit" className="SearchForm-button">
        <BsSearch className="SearchForm-icon" />
        <span className="SearchForm-button-label">Search</span>
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
