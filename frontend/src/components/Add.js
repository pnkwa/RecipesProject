import React, { useState } from "react";
//import css
import "../css/form.css";

import Axios from "axios";

export default function Add() {
  const [ingredients, setIngredients] = useState(["", "", ""]);
  const [steps, setSteps] = useState(["", "", ""]);
  const [isSuccess, setIsSuccess] = useState(false);

  // Function to add a new ingredient field
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  // Function to add a new step
  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const [formData, setFormData] = useState({
    title: "",
    description: [""],
    image: [""],
    video: "",
    ingredients: [], 
    steps: [],       
    prepTime: "",
    cookTime: "",
    level: "easy",
    serving: "",
    type: "breakfast",
    options: "nonspicy",
    author: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image1" || name === "image2") {
      // Handle image inputs
      const imageIndex = name === "image1" ? 0 : 1;
      const newImages = [...formData.image];
      newImages[imageIndex] = value;
      setFormData({
        ...formData,
        image: newImages,
      });
    } else if (name === "author" || name === "serving" || name === "options") {
      // Handle author, serving, and options inputs
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name.startsWith("ingredient")) {
      // Handle ingredients inputs
      const ingredientIndex = parseInt(name.match(/\d+/)[0]);
      const newIngredients = [...formData.ingredients];
      newIngredients[ingredientIndex] = value;
      setFormData({
        ...formData,
        ingredients: newIngredients,
      });
    } else if (name.startsWith("step")) {
      // Handle steps inputs
      const stepIndex = parseInt(name.match(/\d+/)[0]);
      const newSteps = [...formData.steps];
      newSteps[stepIndex] = value;
      setFormData({
        ...formData,
        steps: newSteps,
      });
    } else {
      // Handle other inputs
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  

  console.log(steps)
  console.log(ingredients)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Recipe saved:", data);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                  <input
                    type="text"
                    name="title"
                    placeholder="Give your recipe a title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="desc">
                <h2>Description</h2>
                <div class="typedesc">
                  <textarea
                    id="recipeDescription"
                    name="description"
                    placeholder="Share the story behind your recipe and what makes it special..."
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <div class="photo">
                <h2>Photo (optional)</h2>
                <div class="typephoto1">
                  <input
                    type="text"
                    name="image1" // Change the name to "image1"
                    placeholder="Add image url"
                    value={formData.image[0]} // Update the value to use an array
                    onChange={handleChange}
                  />
                </div>
                <div class="typephoto">
                  <input
                    type="text"
                    name="image2" // Change the name to "image2"
                    placeholder="Add image url"
                    value={formData.image[1]} // Update the value to use an array
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="video">
                <h2>Video (optional)</h2>
                <div class="typevideo">
                  <input
                    type="text"
                    name="video"
                    placeholder="Add video url"
                    value={formData.video}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section_2">
            <h2>Ingredients</h2>
            <p>
              Enter one ingredient per line. Include the quantity and any
              special preparation. Use optional headers to organize the
              different parts of the recipe.
            </p>
            <h3>Enter ingredients below</h3>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="typeingre">
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
                <i className="fa-solid fa-circle-minus"></i>
              </div>
            ))}
            <button type="button" onClick={handleAddIngredient}>
              +Add Ingredient
            </button>
          </div>

          <div className="section_3">
            <h2>Directions</h2>
            <p>
              Explain how to make your recipe, including oven temperatures,
              baking or cooking times, and pan sizes. Organize the different
              parts of the recipe
            </p>
            <h3>Enter directions below</h3>
            {steps.map((step, index) => (
              <div key={index} className="typedirec">
                <p>Step {index + 1}</p>
                <textarea
                  value={step}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[index] = e.target.value;
                    setSteps(newSteps);
                  }}
                ></textarea>
                <i className="fa-solid fa-circle-minus"></i>
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
                <input
                  type="text"
                  name="prepTime"
                  placeholder="0"
                  value={formData.prepTime}
                  onChange={handleChange}
                />
                <label for="preptime">min</label>
              </div>
              <div class="selectBox">
                <h2>Cook Time</h2>
                <input
                  type="text"
                  name="cookTime"
                  placeholder="0"
                  value={formData.cookTime}
                  onChange={handleChange}
                />
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

                <select
                  id="recipe-type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
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
                <input
                  type="text"
                  name="serving"
                  placeholder="0"
                  value={formData.serving}
                  onChange={handleChange}
                />
              </div>
              <div class="selectBox">
                <h2>Options</h2>
                <label for="recipe-options">Select Options</label>

                <select
                  id="recipe-options"
                  name="opt"
                  value={formData.options}
                  onChange={handleChange}
                >
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
            <input
              type="text"
              name="author"
              placeholder="Your name"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div class="section_6">
            <button class="save-button" type="submit">
              Save Recipe
            </button>
            <button class="cancel-button" type="reset">
              Cancel {/* Use type="reset" to reset the form */}
            </button>
          </div>
        </div>
      </form>
      {isSuccess && (
        <div className="success-message">Recipe saved successfully!</div>
      )}
    </>
  );
}
