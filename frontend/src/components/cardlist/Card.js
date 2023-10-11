import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card({ recipeData, className }) {
  return (
    <div className={className}>
      <div className="card">
        <div className="recipe_img">
          <img src={recipeData.image[0]} alt="img" />
        </div>
        <p>{recipeData.name}</p>
        <Link to={`/recipes/${recipeData.id}`}>
          <button type="submit">Check Out</button>
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  recipeData: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Card)`
  .card {
    background-color: rgb(255, 255, 255);
    width: 200px;
    height: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #e23c34;
  }

  .card .recipe_img {
    width: 180px;
    height: 180px;
    display: flex;
    overflow: hidden;
    justify-content: center;
  }

  .card .recipe_img img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
  }
  .card p {
    padding-top: 20px;
  }

  .card button {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    padding: 5px;
    margin: 10px;
    border-radius: 30px;
    width: 120px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }
  .card button:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
`;