import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

function Review({ idRecipe, className }) {
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

  return (
    <div className={className}>
      <div className="container_review">
        <div className="heading">
          <h2>Reviews</h2>
          <p>({reviews.length})</p>
        </div>
        {!Array.isArray(reviews) ? (
          <div className="noReview">
            No reviews for this recipe yet, be the first to share!
          </div>
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
    </div>
  );
}

Review.propTypes = {
  idRecipe: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Review)`
  .container_review {
    color: #e23c34;
  }
  .container_review .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
  }
  .noReview {
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #e23c34;
    border: 2px dashed #e23c34;
    margin: 10px 0 10px 0;
  }

  .review_box {
    background: #fff;
    margin: 0 10px 20px 0;
    padding: 20px;
    width: 100%;
  }
  .review_box .name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
    color: #e23c34;
  }
  .review_box i {
    cursor: pointer;
    font-size: larger;
    padding: 5px;
    transition: 0.3s ease, color 0.3s ease;
  }
  .review_box i:hover {
    cursor: pointer;
    font-size: larger;
    padding: 5px;
    color: #fdee82;
  }
  .review_box .name p {
    padding-left: 30px;
    color: #e23c34;
  }
  .review_box .comment {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 20px;
    margin-top: 5px;
    font-size: 20px;
    width: 100%;
    height: 40px;
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #000000;
  }
  .review_box .count {
    position: absolute;
    right: 90px;
    transform: translateY(-90%);
    font-size: 40px;
    color: #e23c34;
    font-weight: bold;
  }
`;