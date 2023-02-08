import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import * as API from '../../service/MoviesApi';
import Searchbar from 'components/SearchBar/Searchbar';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

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
      <Searchbar query={query} onSubmit={setSearchParams} />
      <h1>Found movies</h1>
      <ul>
        {searchResults.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
