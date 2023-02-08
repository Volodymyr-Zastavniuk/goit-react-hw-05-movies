import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../../service/MoviesApi';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const trendingMovies = await API.fetchData(API.PATH.trending);
        setTrendingMovies(trendingMovies.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
