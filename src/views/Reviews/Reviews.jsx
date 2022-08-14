import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as getReviewAPI from 'services/movies-api';

export default function Reviews({ movieId }) {
  const [review, setReview] = useState('');

  useEffect(() => {
    getReviewAPI.getMoviesReviews(movieId).then(setReview);
  }, [movieId]);
  return (
    <>
      <hr />
      {!review || review.length === 0 ? (
        <p>
          There are no reviews yet. Become the first, who will write a review!
        </p>
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
