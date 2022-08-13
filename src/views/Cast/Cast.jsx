import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as getCastAPI from 'services/movies-api';
import css from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCastAPI.getMovieCast(movieId).then(setCast);
  }, [movieId]);
  return (
    <div className={css.cast_thumb}>
      <hr />
      {!cast ||
        (cast.length === 0 ? (
          <p>We don't have a cast for this movie</p>
        ) : (
          cast.map(e => {
            return (
              <div key={e.castId}>
                {e.castMemberPhoto.includes('w500/null') ? (
                  <div></div>
                ) : (
                  <img
                    src={e.castMemberPhoto}
                    alt={e.name}
                    className={css.image}
                  />
                )}
                <h5>{e.name}</h5>
                <p>{e.character}</p>
              </div>
            );
          })
        ))}
    </div>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
