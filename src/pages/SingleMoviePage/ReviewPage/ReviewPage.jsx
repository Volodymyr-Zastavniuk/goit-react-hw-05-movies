import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../../../service/MoviesApi';

// export default function ReviewPage() {
const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    setIsloading(true);
    async function fetchMovies() {
      try {
        const { results } = await API.fetchData(
          API.PATH.searchReviews(movieId)
        );
        setReviews(results);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  if (isLoading) {
    return;
    // LOADER !!!
  }

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul className="review-wrapper ">
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
};

export default ReviewPage;
