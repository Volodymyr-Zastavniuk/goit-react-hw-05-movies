import { useEffect, useState } from 'react';
import * as API from '../../service/MoviesApi';
import Searchbar from 'components/SearchBar/Searchbar';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      if (!query) {
        return;
      }
      try {
        const fetchMovies = await API.fetchData(API.PATH.searchByName, query);
        setSearchResults(fetchMovies.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={setQuery} />
      <h1>Found movies</h1>
      <ul>
        {searchResults.map(({ id, title }) => (
          <li key={id}>
            <a href="#">{title} </a>
          </li>
        ))}
      </ul>
    </>
  );
}
