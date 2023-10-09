import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ recipeData}) {
  return (
    <div className="card">
      <div className="recipe_img">
        <img src={recipeData.image[0]} alt="img" />
      </div>
      <p>{recipeData.name}</p>
      <Link to={`/recipes/${recipeData.id}`}>
        <button type="submit">Check Out</button>
      </Link>
    </div>
  );
}

export default Card;

Card.propTypes = {
  recipeData: PropTypes.object.isRequired,
};
