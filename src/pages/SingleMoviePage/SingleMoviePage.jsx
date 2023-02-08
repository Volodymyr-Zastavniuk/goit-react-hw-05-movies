import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import * as API from '../../service/MoviesApi';
import './SingleMoviePage.css';

function getGenres(genres) {
  return genres?.length > 0
    ? genres.map(genre => genre.name).join(', ')
    : 'Not specified';
}

export default function SingleMoviePage() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsloading(true);
    async function fetchMovies() {
      try {
        const data = await API.fetchData(API.PATH.searchByID(movieId));
        setMovie(data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  const { title, overview, vote_average, poster_path, release_date, genres } =
    movie;

  if (isLoading) {
    return;
    // LOADER !!!
  }

  return (
    <section>
      <Link to={location.state?.from ?? '/'} className="movie-link">
        <BiArrowBack />
        Go back
      </Link>
      <div className="movie-wrapper ">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="movie poster"
            width="250px"
            height="auto"
          />
        </div>
        <div>
          <h1>
            {title} {'(' + release_date?.slice(0, 4) + ')'}
          </h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <p>
            <b>Overview</b>
          </p>
          <p> {overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>{getGenres(genres)}</p>
        </div>
      </div>

      <div className="movie-info">
        <h2>Additional info</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
}
