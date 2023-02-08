import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../../../service/MoviesApi';

export default function CastPage() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { cast } = await API.fetchData(API.PATH.searchCast(movieId));
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  if (cast.length === 0) {
    return;
  }

  return (
    <>
      <ul className="cast-wrapper ">
        {cast.map(({ profile_path, character, name, id }) => (
          <li key={`${character}-${id}`}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://media.istockphoto.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=0&k=20&c=JN4E5qJgcq3qm89rSc2BIJT6AZ80MvRJie__r3OENY8=`
              }
              alt={name}
              width="100px"
              height="auto"
            />
            <p>
              <b>{name}</b>
            </p>
            <p> Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
