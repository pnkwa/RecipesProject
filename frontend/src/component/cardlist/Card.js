import React from "react";
import PropTypes from "prop-types";

function Card({ title, imgURL }) {
  return (
    <div class="card">
      <div class="recipe_img">
        <img src={imgURL} alt="img" />
      </div>
      <p>{title}</p>
      <button type="submit">Check Out</button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};
