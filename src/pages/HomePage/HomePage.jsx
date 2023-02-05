import { useEffect, useState } from 'react';
import * as API from '../../service/MoviesApi';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

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
            <a href="/id">{title} </a>
          </li>
        ))}
      </ul>
    </>
  );
}
