import { useState, useEffect } from 'react';
import * as searchMoviesAPI from 'services/movies-api';
import { Link, useLocation } from 'react-router-dom';
import Searchbar from 'components/Searchbar';

export default function Movie() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [movie, setMovie] = useState(searchParams.get('search' ?? ''));
  const [moviesGallery, setMoviesGallery] = useState([]);

  const handleMoviesSubmit = movie => {
    setMovie(movie);
    setMoviesGallery([]);
  };

  useEffect(() => {
    if (!movie) {
      return;
    }
    searchMoviesAPI.searchMovies(movie).then(setMoviesGallery);
  }, [movie]);
  return (
    <>
      <Searchbar handleMoviesSubmit={handleMoviesSubmit} />
      {moviesGallery && (
        <>
          <ul>
            {moviesGallery.map(e => (
              <li key={e.id}>
                <Link to={`/movies/${e.id}?search=${movie}`}>
                  {e.movieName}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
