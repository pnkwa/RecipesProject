import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Review from "./comments/Review";
import NotFound from "./NotFound";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

function Single({ className }) {
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
  const total = recipeData.prepTime + recipeData.cookTime;
  // Format createdAt
  const formatCreatedAt = (createdAt) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(createdAt);
    return date.toLocaleDateString("en-US", options);
  };

  //delete recipe
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      axios
        .delete(`http://localhost:8000/recipes/${id}`)
        .then((response) => {
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Error deleting recipe:", error);
        });
    }
  };

  return (
    <div className={className}>
      <div className="recipe_name">
        <p>By {recipeData.author}</p>
        <h1>{recipeData.title}</h1>
        <p>{formatCreatedAt(recipeData.createdAt)}</p>
      </div>

      <div className="top_banner">
        <div className="type_cir">
          <h3>Type: {recipeData.type}<br/>Level: {recipeData.level}<br/>Options: {recipeData.options}</h3>
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
              <p>Prep time {recipeData.prepTime} mins</p>
            </div>
            <div>
              <p>Cook time {recipeData.cookTime} mins</p>
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
          {recipeData.steps.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ol>
        <div className="editBtn">
          <button onClick={handleDelete}>Delete Recipe</button>
          <Link to={`/edit/${id}`}>
            <button type="submit">Edit Recipe</button>
          </Link>
        </div>
      </div>
      <Review idRecipe={id} />
    </div>
  );
}

Single.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Single)`
  .recipe_name {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding-top: 100px;
    color: #e23c34;
  }

  .top_banner {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #e23c34;
  }
  .top_banner .type_cir {
    background-color: #fdee82;
    width: 200px;
    height: 200px;
    padding: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    top: 250px;
    right: 70%;
  }
  .type_cir h3 {
    width: 100%;
  }
  .top_banner .slideshow {
    height: 500px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 20px 100px 20px 100px;
    background-color: rgb(255, 255, 255);
  }
  .top_banner .slideshow img {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
  }

  .bottom_banner {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 50px;
    padding-right: 50px;
    color: #e23c34;
  }

  .bottom_banner .time {
    background-color: rgb(255, 255, 255);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .time .type_cir {
    background-color: #fdee82;
    width: 150px;
    height: 150px;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 200px;
    right: 0px;
    font-weight: bold;
  }
  .time img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    margin: 10px;
  }
  .time_details {
    display: flex;
    flex-direction: row;
  }
  .time_details div {
    background-color: rgb(255, 255, 255);
    height: 50px;
    width: 100px;
    text-align: center;
    font-weight: bold;
    margin: 10px;
  }

  .bottom_banner .ingredients {
    background-color: #fff;
    width: 350px;
    margin: 50px;
    padding: 10px;
    border: 3px dashed #e23c34;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ingredients ol {
    padding-left: 50px;
    margin-top: 20px;
    font-size: large;
  }
  .ingredients h2 {
    background-color: #fdee82;
    border-radius: 30px;
    padding: 5px;
    text-align: center;
    width: 60%;
  }

  .recipe_details {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 50px;
    padding-right: 50px;
    border-top: 1px solid #e23c34;
    color: #e23c34;
  }
  .recipe_details h2 {
    background-color: #fdee82;
    border-radius: 30px;
    padding: 5px;
    text-align: center;
    width: 30%;
  }

  .recipe_details ol {
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
    padding-left: 50px;
    width: 700px;
  }
  .recipe_details .editBtn {
    margin-top: 30px;
  }
  .recipe_details .editBtn button:first-child {
    background-color: #ffffff;
    border: 1px solid #e23c34;
    padding: 10px;
    margin: 10px;
    border-radius: 30px;
    width: 130px;
    color: #e23c34;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }
  .recipe_details .editBtn button {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    padding: 10px;
    margin: 10px;
    border-radius: 30px;
    width: 130px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }
  .recipe_details .editBtn button:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
`;