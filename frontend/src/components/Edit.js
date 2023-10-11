import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Edit({ className }) {
  const { id } = useParams();

  const [ingredients, setIngredients] = useState(["", "", ""]);
  const [steps, setSteps] = useState(["", "", ""]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recipeData, setRecipeData] = useState({
    title: "",
    image: ["", ""],
    video: "",
    ingredients: ["", "", ""],
    steps: ["", "", ""],
    prepTime: "",
    cookTime: "",
    level: "easy",
    serving: "",
    type: "breakfast",
    options: "",
    author: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to add a new ingredient field
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  // Function to remove a ingredient
  const handleRemoveIngredient = () => {
    const newIngredients = [...ingredients];
    newIngredients.splice(newIngredients.length - 1, 1);
    setIngredients(newIngredients);
  };

  // Function to add a new step
  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  // Function to remove a step
  const handleRemoveStep = () => {
    const newSteps = [...steps];
    newSteps.splice(newSteps.length - 1, 1);
    setSteps(newSteps);
  };

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

  const handleUpdate = (e) => {
    axios
      .put(`http://localhost:8000/recipes/${id}`, {
        ...recipeData,
        [e.target.name]: e.target.value,
      })
      .then((response) => {
        console.log("Recipe updated:", response.data);
        window.location.href = `/recipes/${id}`;
      });
  };

  const [formData, setFormData] = useState({
    title: "",
    image: [""],
    video: "",
    ingredients: [],
    steps: [],
    prepTime: "",
    cookTime: "",
    level: "easy",
    serving: "",
    type: "breakfast",
    options: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "title",
      "prepTime",
      "cookTime",
      "level",
      "serving",
      "type",
      "options",
      "author",
    ];

    const emptyFields = requiredFields.filter(
      (field) => formData[field].trim() === ""
    );

    if (emptyFields.length > 0) {
      alert(`Please fill in all required fields: ${emptyFields.join(", ")}`);
      return;
    }
    // Validate Prep Time, Cook Time, and Servings
    const prepTimeValue = parseFloat(formData.prepTime);
    const cookTimeValue = parseFloat(formData.cookTime);
    const servingValue = parseFloat(formData.serving);

    if (isNaN(prepTimeValue) || isNaN(cookTimeValue) || isNaN(servingValue)) {
      alert("Prep Time, Cook Time, and Servings must be numbers.");
      return; // Do not proceed with the submission
    }

    try {
      const response = await Axios.post(
        "http://localhost:8000/recipes",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.status === 200) {
        throw new Error(
          `Network response was not ok: ${response.status} - ${response.statusText}`
        );
      }

      const data = response.data;
      console.log("Recipe saved:", data);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div class="top_name">
            <h1>Edit a Recipe</h1>
            <p>
              Editing a recipe allows you to personalize flavors and create
              culinary masterpieces uniquely tailored to your taste, unlocking a
              world of culinary creativity and satisfaction.
            </p>
          </div>

          <div className="section_1">
            <div>
              <h2>Recipe Title</h2>
              <input
                type="text"
                name="title"
                value={recipeData ? recipeData.title : ""}
                placeholder="Give your recipe a title"
                onChange={handleUpdate}
              />
            </div>
            <div>
              <div className="photo">
                <h2>Photo (optional)</h2>
                <div className="typephoto1">
                  <input
                    type="text"
                    name="image1"
                    placeholder="Add image url"
                    value={recipeData.image[0]} // Update the value to use an array
                    onChange={handleUpdate}
                  />
                </div>
                <div className="typephoto">
                  <input
                    type="text"
                    name="image2"
                    placeholder="Add image url"
                    value={recipeData.image[1]} // Update the value to use an array
                    onChange={handleUpdate}
                  />
                </div>
              </div>

              <div className="video">
                <h2>Video (optional)</h2>
                <div className="typevideo">
                  <input
                    type="text"
                    name="video"
                    placeholder="Add video url"
                    value={recipeData.video}
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
                  value={recipeData.ingredients[index]}
                  onChange={(e) => {
                    const newIngredients = [...recipeData.ingredients];
                    newIngredients[index] = e.target.value;
                    setFormData({
                      ...formData,
                      ingredients: newIngredients,
                    });
                  }}
                />
                <i
                  onClick={handleRemoveIngredient}
                  className="fa-solid fa-circle-minus"
                ></i>
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
                  value={recipeData.steps[index]}
                  onChange={(e) => {
                    const newSteps = [...formData.steps];
                    newSteps[index] = e.target.value;
                    setFormData({
                      ...formData,
                      steps: newSteps,
                    });
                  }}
                  placeholder="e.g. Reheat oven at 30 degrees F..."
                ></textarea>
                <i
                  onClick={handleRemoveStep}
                  className="fa-solid fa-circle-minus"
                ></i>
              </div>
            ))}
            <button type="button" onClick={handleAddStep}>
              +Add Step
            </button>
          </div>

          <div className="section_4">
            <div>
              <div className="selectBox">
                <h2>Prep Time</h2>
                <input
                  type="text"
                  name="prepTime"
                  placeholder="0"
                  value={recipeData.prepTime}
                  onChange={handleChange}
                />
                <label for="preptime">min</label>
              </div>
              <div className="selectBox">
                <h2>Cook Time</h2>
                <input
                  type="text"
                  name="cookTime"
                  placeholder="0"
                  value={recipeData.cookTime}
                  onChange={handleChange}
                />
                <label for="cooktime">min</label>
              </div>
            </div>

            <div>
              <div className="selectBox">
                <label for="level">
                  <h2>Level</h2>
                </label>
                <select id="level" name="level" value={recipeData.level}>
                  <option value="easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="selectBox">
                <label for="recipe-type">
                  <h2>Type</h2>
                </label>

                <select
                  id="recipe-type"
                  name="type"
                  value={recipeData.type}
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
              <div className="selectBox">
                <h2>Servings</h2>
                <input
                  type="text"
                  name="serving"
                  placeholder="0"
                  value={recipeData.serving}
                  onChange={handleChange}
                />
              </div>
              <div className="selectBox">
                <label for="recipe-options">
                  <h2>Options</h2>
                </label>
                <select
                  id="recipe-options"
                  name="opt"
                  value={recipeData.options}
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

          <div className="section_5">
            <h2>Author Name</h2>
            <input
              type="text"
              name="author"
              placeholder="Your name"
              value={recipeData.author}
              onChange={handleChange}
            />
          </div>

          <div className="section_6">
            <Link to={"/"}>
              <button className="cancel-button" type="button">
                Cancel {/* Use type="reset" to reset the form */}
              </button>
            </Link>
            <button className="save-button" type="submit">
              Save Recipe
            </button>
          </div>
        </div>
      </form>
      {isSuccess && (
        <div className="success-message">Recipe saved successfully!</div>
      )}
    </div>
  );
}

Edit.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Edit)`
  .container {
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container .top_name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 130px 130px 0 130px;
    color: #e23c34;
  }

  .container .section_1 {
    margin-top: 20px;
    padding: 20px 0;
    border-top: #e23c34 1px solid;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    color: #e23c34;
  }

  .container .section_1 input {
    width: 500px;
    padding: 10px;
    margin-bottom: 10px;
    border: 0;
    outline: none;
  }

  .container .section_1 input::placeholder {
    color: #ababab;
  }

  .container .section_1 textarea {
    width: 500px;
    height: 80px;
    padding: 10px;
    margin-bottom: 10px;
    border: 0;
    outline: none;
    resize: none;
    background-color: #fff;
  }
  .section_3 textarea::placeholder {
    color: #ababab;
    font-family: "Inter", sans-serif;
  }

  .container .section_1 h2 {
    margin: 10px 0;
  }

  .container .section_1 textarea::placeholder {
    color: transparent;
  }

  .container .section_2,
  .container .section_3,
  .container .section_4,
  .container .section_5 {
    margin-top: 20px;
    padding: 20px 0;
    border-top: #e23c34 1px solid;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    color: #e23c34;
  }

  .container .section_2 input,
  .container .section_5 input {
    width: 500px;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 0;
    outline: none;
  }

  .container .section_2 input::placeholder,
  .container .section_5 input::placeholder {
    color: #ababab;
  }

  .container .section_2 .typeingre,
  .typedirec {
    display: flex;
    align-items: center;
  }
  .container .section_2 .typeingre i,
  .typedirec i {
    color: #ababab;
  }

  .container .section_2 .typeingre i:hover,
  .typedirec i:hover {
    cursor: pointer;
    color: #6b6b6b;
    transition: all ease 0.5s;
  }

  .container .section_2 button,
  .container .section_3 button {
    background-color: #e23c34;
    color: #fff;
    border: #e23c34 2px solid;
    border-radius: 100px;
    padding: 10px;
    transition: 0.3s;
    text-align: center;
    margin: 10px 0;
    width: 15%;
  }

  .container .section_2 button:hover,
  .container .section_3 button:hover {
    background-color: #fdee82;
    color: #e23c34;
    border: #e23c34 2px solid;
    border-radius: 100px;
    padding: 10px;
    cursor: pointer;
  }

  .container .section_2 h2,
  h3 {
    margin: 10px 0;
  }

  .container .section_3 textarea {
    width: 500px;
    height: 80px;
    padding: 10px;
    margin: 10px;
    border: 0;
    outline: none;
    resize: none;
    background-color: #fff;
  }

  .container .section_3 textarea::placeholder {
    color: #ababab;
  }

  .container .section_4 {
    display: flex;
    flex-wrap: wrap;
  }

  .container .section_4 .selectBox {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .container .section_4 .selectBox input {
    width: 50px;
    height: 30px;
    margin: 10px;
    border: 0;
    text-align: center;
    outline: none;
  }

  .container .section_4 .selectBox input::placeholder {
    color: #ababab;
    cursor: pointer;
  }

  .container .section_4 .selectBox select {
    width: 150px;
    height: 30px;
    margin: 10px;
    border: 0;
    outline: none;
    border: #fff 2px solid;
    cursor: pointer;
  }

  .container .section_4 .selectBox select:hover {
    background-color: #fff;
    color: #e23c34;
    border: #e23c34 2px solid;
    transition: 0.3s;
  }

  .container .section_4 .selectBox select option {
    background-color: #ffffff;
    color: #333;
    padding: 5px;
    outline: none;
  }

  .container .section_4 label {
    margin-left: 10px;
  }

  .container .section_5 h2 {
    margin-bottom: 10px;
  }

  .section_6 .cancel-button {
    background-color: #fff;
    color: #e23c34;
    border: #e23c34 2px solid;
    border-radius: 100px;
    padding: 10px;
    transition: 0.3s;
    text-align: center;
    margin: 10px 0;
    cursor: pointer;
    width: 150px;
  }

  .section_6 .cancel-button:hover {
    background-color: #fdee82;
    color: #e23c34;
    border: #e23c34 2px solid;
    border-radius: 100px;
  }

  .section_6 .save-button {
    background-color: #e23c34;
    color: #fff;
    border: #e23c34 2px solid;
    border-radius: 100px;
    padding: 10px;
    transition: 0.3s;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;
    width: 150px;
  }

  .section_6 .save-button:hover {
    background-color: #fdee82;
    color: #e23c34;
    border: #e23c34 2px solid;
    border-radius: 100px;
  }

  .section_6 {
    text-align: right;
  }
`;
