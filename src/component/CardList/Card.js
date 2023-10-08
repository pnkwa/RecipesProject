import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ key, title, imgURL }) {
  return (
    <div class="card">
      <div class="recipe_img">
        <img src={imgURL} alt="img" />
      </div>
      <p>{title}</p>
      <Link to={`/1`}>
        <button type="submit">Check Out</button>
      </Link>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};
