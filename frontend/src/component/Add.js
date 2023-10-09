import React from "react";
import { Link } from "react-router-dom";

export default function Add() {
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
                ></textarea>
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
          <div class="typeingre">
            <input type="text" placeholder="e.g. 2 cups flour" />
            <i class="fa-solid fa-circle-minus"></i>
          </div>
          <div class="typeingre">
            <input type="text" placeholder="e.g. 1 cup sugar" />
            <i class="fa-solid fa-circle-minus"></i>
          </div>
          <div class="typeingre">
            <input
              type="text"
              placeholder="e.g. 2 table spoons butter, softened"
            />
            <i class="fa-solid fa-circle-minus"></i>
          </div>
          <button type="button">+Add Ingredient</button>
        </div>

        <div class="section_3">
          <h2>Directions</h2>
          <p>
            Explain how to make your recipe, including oven temperatures, baking
            or cooking times, and pan sizes. Organize the different parts of the
            recipe
          </p>
          <h3>Enter dirctions below</h3>
          <div class="typedirec">
            <p>Step1</p>
            <textarea placeholder="e.g. Reheat oven at 30 degrees F..."></textarea>
            <i class="fa-solid fa-circle-minus"></i>
          </div>
          <div class="typedirec">
            <p>Step2</p>
            <textarea>e.g. Combine all dry ingredients in...</textarea>
            <i class="fa-solid fa-circle-minus"></i>
          </div>
          <div class="typedirec">
            <p>Step3</p>
            <textarea>e.g. Pour all into the pan on the...</textarea>
            <i class="fa-solid fa-circle-minus"></i>
          </div>

          <button type="button">+Add Step</button>
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
          <Link to={"/"}>
            <button class="cancel-button" type="submit">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}