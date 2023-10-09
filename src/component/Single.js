import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import Review from "./comments/Review";
import Comment from "./comments/Comment";

function Single() {
  const { id } = useParams();

  const recipeData = {
    id: 1,
    name: "Pasta with Tomato Sauce",
    type: "lunch",
    prep: 15,
    cook: 20,
    serving: 2,
    ingredients: [
      "Pasta",
      "Tomato sauce",
      "Garlic",
      "Onion",
      "Olive oil",
      "Basil leaves",
      "Parmesan cheese",
    ],
    author: "chef_cuisine",
    date: "12:30 pm.",
    details: [
      "Boil the pasta in a large pot of salted water until al dente, then drain.",
      "In a separate pan, heat olive oil and sauté garlic and onion until fragrant.",
      "Add tomato sauce and basil leaves, simmer for 10 minutes.",
      "Toss the cooked pasta in the tomato sauce and serve with grated Parmesan cheese.",
    ],
    options: ["vegetarian", "gluten-free"],
    level: "medium",
    video: "https://youtu.be/Svk1SwdL1eg?si=5a12QkUC1fYjF7jv",
    image: ["./images/recipe/steak2.jpg", "./images/recipe/steak3.jpg"],
  };

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
            <Link to={`/edit`}>
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
