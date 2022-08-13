import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as getReviewAPI from 'services/movies-api';

export default function Reviews({ movieId }) {
  const [review, setReview] = useState(null);

  useEffect(() => {
    getReviewAPI.getMoviesReviews(movieId).then(setReview);
  }, [movieId]);
  return (
    <>
      {!review || review.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        review.map(el => {
          return (
            <div key={el.reviewId}>
              <h5>{el.author}</h5>
              <p>{el.review}</p>
            </div>
          );
        })
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
