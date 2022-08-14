import { useState, useEffect, lazy } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';
import * as getMovieDetailsAPI from 'services/movies-api';
import css from './MovieDetails.module.css';

const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    getMovieDetailsAPI.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const searchQuery = searchParams.get('search' ?? '');

  return (
    <div>
      <Link
        to={searchQuery ? `/movies?search=${searchQuery}` : '/'}
        className={css.goBack_link}
      >
        &#8592; Go Back
      </Link>
      {movie && (
        <div className={css.movie_thumb}>
          <img src={movie[0].poster} alt={movie[0].tag} className={css.image} />
          <div>
            <h2>{movie[0].movieName}</h2>
            <p>User score: {movie[0].userScore}</p>
            <h3>Overview</h3>
            <p>{movie[0].overview}</p>
            <h3>Genres</h3>
            <p className={css.genres}>{movie[0].genres.join(',  ')}</p>
          </div>
        </div>
      )}
      <hr />
      <h3>More information</h3>
      <div>
        <ul className={css.links}>
          <li>
            <NavLink to={`cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />}></Route>
          <Route path="reviews" element={<Reviews movieId={movieId} />}></Route>
        </Routes>
      </div>
    </div>
  );
}
