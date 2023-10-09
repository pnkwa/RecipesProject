import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import Review from "./comments/Review";
import Comment from "./comments/Comment";
import axios from "axios";

function Single() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/${id}`)
      .then((response) => {
        setRecipeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <NotFound />;
  }
  if (!recipeData) {
    return <div>No recipe data available.</div>;
  }
  const total = recipeData.prep + recipeData.cook;

  return (
    <>
      <div className="container">
        <div className="recipe_name">
          <p>By {recipeData.author}</p>
          <h1>{recipeData.name}</h1>
          <p>{recipeData.date}</p>
        </div>

        <div className="top_banner">
          <div className="type_cir">
            <h3>TYPE {recipeData.type}</h3>
          </div>
          <div className="slideshow">
            <img src={recipeData.image[0]} alt="img" />
          </div>
        </div>

        <div className="bottom_banner">
          <div className="time">
            <div className="type_cir">
              <p>Cook in {total} mins</p>
            </div>
            <img src={recipeData.image[1]} alt="img" />
            <div className="time_details">
              <div>
                <p>Prep time {recipeData.prep} mins</p>
              </div>
              <div>
                <p>Cook time {recipeData.cook} mins</p>
              </div>
              <div>
                <p>Serving {recipeData.serving} serving</p>
              </div>
            </div>
          </div>

          <div className="ingredients">
            <h2>Ingredients</h2>
            <ol>
              {recipeData.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="recipe_details">
          <h2>How To : Step by step</h2>
          <ol>
            {recipeData.details.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
          <div className="editBtn">
            <button type="submit">Delete Recipe</button>
            <Link to={`/edit/${id}`}>
              <button type="submit">Edit Recipe</button>
            </Link>
            ;
          </div>
        </div>
        <Review />
        <Comment />
      </div>
    </>
  );
}

export default Single;
