import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

function Edit({ className }) {
  const { id } = useParams();
  return (
    <div className={className}>
    <form action="/update-recipe" method="POST">
      <div class="container">
        <div class="top_name">
          <h1>Edit a Recipe</h1>
          <p>
            Editing a recipe allows you to personalize flavors and create
            culinary masterpieces uniquely tailored to your taste, unlocking a
            world of culinary creativity and satisfaction.
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
                <textarea>
                  Share the story behind your recipe and what make it special...
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
            <textarea>e.g. Reheat oven at 30 degrees F...</textarea>
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
          {/* Link back to /:id */}
          <Link to={`/recipes/${id}`}>
            <button class="cancel-button" type="submit">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
    </div>
  );
}

Edit.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Edit)`
.container{
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

.container .section_1 input{
  width: 500px;
  padding: 10px;
  margin-bottom: 10px;
  border: 0;
  outline: none;
}

.container .section_1 input::placeholder{
  color: #ababab;
}

.container .section_1 textarea{
  width: 500px;
  height: 80px;
  padding: 10px;
  margin-bottom: 10px;
  border: 0;
  outline: none;
  resize: none;
  background-color: #fff;
}
.section_3 textarea::placeholder{
  color: #ababab;
  font-family: "Inter", sans-serif;;
}

.container .section_1 h2{
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

.container .section_2 input, .container .section_5 input{
  width: 500px;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border: 0;
  outline: none;

}

.container .section_2 input::placeholder, .container .section_5 input::placeholder{
  color: #ababab;
}

.container .section_2 .typeingre, .typedirec{
  display: flex;
  align-items: center;
}
.container .section_2 .typeingre i, .typedirec i{ 
  color: #ababab
}

.container .section_2 .typeingre i:hover, .typedirec i:hover{ 
  cursor: pointer;
  color: #6b6b6b;
  transition: all ease 0.5s;
}

.container .section_2 button, .container .section_3 button{
  background-color: #e23c34;
  color: #fff;
  border: #e23c34 2px solid;
  border-radius: 100px;
  padding: 10px;
  transition: .3s;
  text-align: center;
  margin: 10px 0;
  width: 15%;
}

.container .section_2 button:hover, .container .section_3 button:hover{
  background-color: #fdee82;
  color: #e23c34;
  border: #e23c34 2px solid;
  border-radius: 100px;
  padding: 10px;
  cursor: pointer;
}

.container .section_2 h2, h3{
  margin: 10px 0;
}

.container .section_3 textarea{
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

.container .section_4{
  display: flex;
  flex-wrap: wrap;
}

.container .section_4 .selectBox{
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
}

.container .section_4 .selectBox input{
  width: 50px;
  height: 30px;
  margin: 10px;
  border: 0;
  text-align: center;
  outline: none;
}

.container .section_4 .selectBox input::placeholder{
  color: #ababab;
  cursor: pointer;
}

.container .section_4 .selectBox select{
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
  transition: .3s;
}

.container .section_4 .selectBox select option {
  background-color: #ffffff;
  color: #333;
  padding: 5px;
  outline: none;

}

.container .section_4 label{
  margin-left: 10px;
}

.container .section_5 h2{
  margin-bottom: 10px;
}

.section_6 .cancel-button{
  background-color: #fff;
  color: #e23c34;
  border: #e23c34 2px solid;
  border-radius: 100px;
  padding: 10px;
  transition: .3s;
  text-align: center;
  margin: 10px 0;
  cursor: pointer;
  width: 150px;
}

.section_6 .cancel-button:hover{
  background-color: #fdee82;
  color: #e23c34;
  border: #e23c34 2px solid;
  border-radius: 100px;
}

.section_6 .save-button{
  background-color: #e23c34;
  color: #fff;
  border: #e23c34 2px solid;
  border-radius: 100px;
  padding: 10px;
  transition: .3s;
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
  width: 150px;
}

.section_6 .save-button:hover{
  background-color: #fdee82;
  color: #e23c34;
  border: #e23c34 2px solid;
  border-radius: 100px;
}

.section_6{
  text-align: right;
}
`;
