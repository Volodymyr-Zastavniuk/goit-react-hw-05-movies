import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../../../service/MoviesApi';

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await API.fetchData(
          API.PATH.searchReviews(movieId)
        );
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>
                <b>{author}</b>
              </p>
              <p> {content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
