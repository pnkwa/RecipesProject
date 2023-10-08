import React, { useState } from "react";
//import css
import "../css/form.css";

export default function Add() {
  const [ingredients, setIngredients] = useState(["", "", ""]);
  const [steps, setSteps] = useState(["", "", ""]);

  // Function to add a new ingredient field
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  // Function to add a new step
  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  return (
    <form action="/submit-recipe" method="POST">
      <div class="container">
        <div class="top_name">
          <h1>Add a Recipe</h1>
          <p>
            Uploading personal recipes is easy! Add yours to your favorites,
            share with friends, family, or the Allrecipes community.
          </p>
        </div>

        <div class="section_1">
          <div>
            <div class="title">
              <h2>Recipe Title</h2>
              <div class="typetitle">
                <input type="text" placeholder="Give your recipe a title " />
              </div>
            </div>
            <div class="desc">
              <h2>Description</h2>
              <div class="typedesc">
                <textarea
                  id="recipeDescription"
                  placeholder="Share the story behind your recipe and what makes it special..."
                >
                  Share the story behind your recipe and what makes it
                  special...
                </textarea>
              </div>
            </div>
          </div>
          <div>
            <div class="photo">
              <h2>Photo (optional)</h2>
              <div class="typephoto">
                <input type="text" placeholder="Add image url" />
              </div>
              <div class="typephoto">
                <input type="text" placeholder="Add image url" />
              </div>
            </div>
            <div class="video">
              <h2>Video (optional)</h2>
              <div class="typevideo">
                <input type="text" placeholder="Add video url" />
              </div>
            </div>
          </div>
        </div>

        <div class="section_2">
          <h2>Ingredients</h2>
          <p>
            Enter one ingredient per line. Include the quantity and any special
            preparation. Use optional headers to organize the different parts of
            the recipe.
          </p>
          <h3>Enter ingredients below</h3>
          {ingredients.map((ingredient, index) => (
            <div key={index} class="typeingre">
              <input
                type="text"
                placeholder="e.g. 2 cups flour"
                value={ingredient}
                onChange={(e) => {
                  const newIngredients = [...ingredients];
                  newIngredients[index] = e.target.value;
                  setIngredients(newIngredients);
                }}
              />
              <i class="fa-solid fa-circle-minus"></i>
            </div>
          ))}
          <button type="button" onClick={handleAddIngredient}>
            +Add Ingredient
          </button>
        </div>

        <div class="section_3">
          <h2>Directions</h2>
          <p>
            Explain how to make your recipe, including oven temperatures, baking
            or cooking times, and pan sizes. Organize the different parts of the
            recipe
          </p>
          <h3>Enter directions below</h3>
          {steps.map((step, index) => (
            <div key={index} class="typedirec">
              <p>Step {index + 1}</p>
              <textarea
                value={step}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index] = e.target.value;
                  setSteps(newSteps);
                }}
              ></textarea>
              <i class="fa-solid fa-circle-minus"></i>
            </div>
          ))}
          <button type="button" onClick={handleAddStep}>
            +Add Step
          </button>
        </div>

        <div class="section_4">
          <div>
            <div class="selectBox">
              <h2>Prep Time</h2>
              <input type="text" placeholder="0" />
              <label for="preptime">min</label>
            </div>
            <div class="selectBox">
              <h2>Cook Time</h2>
              <input type="text" placeholder="0" />
              <label for="cooktime">min</label>
            </div>
          </div>

          <div>
            <div class="selectBox">
              <h2>Level</h2>
              <label for="level">Select Level</label>
              <select id="level" name="level">
                <option value="easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div class="selectBox">
              <h2>Type</h2>
              <label for="recipe-type">Select Type</label>
              <select id="recipe-type" name="type">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="appetizer">Appetizer</option>
                <option value="salad">Salad</option>
                <option value="main-course">Main Course</option>
                <option value="baked-goods">Baked Goods</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
              </select>
            </div>
          </div>

          <div>
            <div class="selectBox">
              <h2>Servings</h2>
              <input type="text" placeholder="3" />
            </div>
            <div class="selectBox">
              <h2>Options</h2>
              <label for="recipe-options">Select Options</label>
              <select id="recipe-options" name="opt">
                <option value="nonspicy">Non-Spicy</option>
                <option value="spicy">Spicy</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
          </div>
        </div>

        <div class="section_5">
          <h2>Author Name</h2>
          <input type="text" placeholder="Your name " />
        </div>

        <div class="section_6">
          <button class="save-button" type="submit">
            Save Recipe
          </button>
          <button class="cancel-button" type="submit">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
