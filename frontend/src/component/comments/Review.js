import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import Comment from "./Comment";

function Review({ idRecipe, className }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editCommentId, setEditCommentId] = useState(null);
  const [updatedText, setUpdatedText] = useState(null);

  const baseURL = "http://127.0.0.1:8000/recipes";

  useEffect(() => {
    axios
      .get(`${baseURL}/${idRecipe}/comments`)
      .then((response) => {
        console.log("API response:", response.data);
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        }
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

  //edit review
  const handleEditReview = (commentId) => {
    setEditCommentId(commentId);
    console.log(commentId);

    const comment = reviews.find((review) => review.id === commentId);
    setUpdatedText(comment.text);
  };

  //delete review
  const handleDeleteReview = (commentId) => {
    axios
      .delete(`${baseURL}/${idRecipe}/comments/${commentId}`)
      .then((response) => {
        const updatedReviews = reviews.filter(
          (review) => review.id !== commentId
        );
        setReviews(updatedReviews);
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
      });
  };

  //save edit review
  const handleSaveEdit = (commentId) => {
    console.log(commentId);
    axios
      .put(`${baseURL}/${idRecipe}/comments/${commentId}`, {
        text: updatedText,
      })
      .then((response) => {
        const updatedReviews = reviews.map((review) => {
          if (review.id === commentId) {
            return { ...review, text: updatedText };
          }
          return review;
        });
        setReviews(updatedReviews);

        setEditCommentId(null);
        setUpdatedText(null);
      })
      .catch((error) => {
        console.error("Error edit:", error);
      });
  };

  //cancel edit review
  const cancelEdit = () => {
    setEditCommentId(null);
  };


  //Add comment
  const handleCommentSubmit = (name, comment) => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Name and comment are required");
      return;
    }

    const newComment = {
      user: name,
      text: comment,
    };

    axios
      .post(`${baseURL}/${idRecipe}/comments`, newComment)
      .then((response) => {
        console.log("Comment posted successfully:", response.data);
        // Add the new comment to the comment list
        setReviews([...reviews, response.data]);
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  return (
    <div className={className}>
      <div className="container_review">
        <div className="heading">
          <h2>Reviews</h2>
          <p>({reviews.length})</p>
        </div>
        {reviews.length === 0 ? (
          <div className="noReview">
            No reviews for this recipe yet, be the first to share!
          </div>
        ) : (
          reviews.map((review, index) => (
            <div className="review_box" key={index}>
              <div className="name">
                <h3>{review.user}</h3>
                <div>
                  {editCommentId === review.id ? (
                    <>
                      <i
                        onClick={() => handleSaveEdit(review.id)}
                        className="fa-solid fa-save"
                      ></i>
                      <i
                        onClick={() => cancelEdit()}
                        className="fa-solid fa-times"
                      ></i>
                    </>
                  ) : (
                    <>
                      <i
                        onClick={() => handleEditReview(review.id)}
                        className="fa-solid fa-pen-to-square"
                      ></i>
                      <i
                        onClick={() => handleDeleteReview(review.id)}
                        className="fa-solid fa-trash"
                      ></i>
                    </>
                  )}
                </div>
              </div>
              <div className="comment">
                {editCommentId === review.id ? (
                  <div className="editmode">
                    <textarea
                      value={updatedText}
                      onChange={(e) => setUpdatedText(e.target.value)}
                    />
                  </div>
                ) : (
                  <p>{review.text}</p>
                )}
              </div>
              <div className="count">
                <p>#{index + 1}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <Comment
        comments={reviews}
        onCommentSubmit={handleCommentSubmit}
        idRecipe={idRecipe}
      />
    </div>
  );
}

Review.propTypes = {
  idRecipe: PropTypes.string.isRequired,
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
    font-size: medium;
  }
  .review_box .comment {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    margin-top: 5px;
    font-size: 20px;
    width: 100%;
    height: 100%;
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #000000;
    word-wrap: break-word;
  }
  .review_box .comment p {
    width: 90%;
  }
  .review_box .count {
    position: absolute;
    right: 90px;
    transform: translateY(-90%);
    font-size: 40px;
    color: #e23c34;
    font-weight: bold;
  }

  .comment .editmode {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    background-color: #fdee82;
    color: #000000;
    word-wrap: break-word;
  }

  .editmode textarea {
    font-family: "Inter", sans-serif;
    background-color: #e23c34;
    width: 90%;
    color: #fff;
    border: 1px solid #fff;
    font-size: medium;
    resize: none; /* Disable textarea resizing */
  }
`;
