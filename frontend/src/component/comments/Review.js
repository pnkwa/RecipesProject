import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Review({ idRecipe }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/${idRecipe}/comments`) 
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [idRecipe]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }
  if (error) {
    return <div>Error fetching reviews: {error.message}</div>;
  }
  if (!Array.isArray(reviews)) {
    return <div className="noReview">No reviews for this recipe yet, be the first one to review!</div>;
  }

  return (
    <>
      <div className="container_review">
        <div className="heading">
          <h2>Reviews</h2>
          <p>({reviews.length})</p>
        </div>
        {reviews.length === 0 ? (
          <div>No reviews for this recipe...</div>
        ) : (
          reviews.map((review, index) => (
        <div className="review_box" key={index}>
          <div className="name">
            <h3>{review.user}</h3>
            <div>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
          <div className="comment">
            <p>{review.text}</p>
          </div>
          <div className="count">
            <p>#{index + 1}</p>
          </div>
        </div>
        ))
        )}
      </div>
    </>
  );
}

export default Review;

Review.propTypes = {
  idRecipe: PropTypes.number.isRequired,
};
