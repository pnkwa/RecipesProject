import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function Single() {
  return (
    <>
 
      <div class="recipe_name">
        <p>By takawa</p>
        <h1>Steak&French fries</h1>
        <p>Published on September 29, 2023</p>
      </div>

      <div class="top_banner">
        <div class="type_cir">
          <h3>TYPE Main-course</h3>
        </div>
        <div class="slideshow">
          <img src="./images/recipe/steak2.jpg" alt="img" />
        </div>
      </div>

      <div class="bottom_banner">
        <div class="time">
          <div class="type_cir">
            <p>Cook in 60 mins</p>
          </div>
          <img src="./images/recipe/steak3.jpg" alt="img" />
          <div class="time_details">
            <div>
              <p>Prep time 10 mins</p>
            </div>
            <div>
              <p>Cook time 50 mins</p>
            </div>
            <div>
              <p>Serving 6-8 serving</p>
            </div>
          </div>
        </div>

        <div class="ingredients">
          <h2>Ingredients</h2>
          <ol>
            <li>Steak (e.g., ribeye, sirloin, filet mignon)</li>
            <li>Olive oil</li>
            <li>Salt</li>
            <li>Black pepper</li>
            <li>Garlic cloves (optional)</li>
            <li>Fresh rosemary (optional)</li>
            <li>Butter (optional)</li>
            <li>Thyme (optional)</li>
          </ol>
        </div>
      </div>

      <div class="recipe_details">
        <h2>How To : Step by step</h2>
        <ol>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
            dolor sit amet
          </li>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
            dolor sit amet
          </li>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
            dolor sit amet
          </li>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
            dolor sit amet
          </li>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor s
          </li>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametvLorem ipsum
            dolor sit amet
          </li>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametvLorem ipsum
            dolor sit amet
          </li>
          <li>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
            dolor sit ametLorem ipsum dolor sit amet
          </li>
        </ol>
        <div class="editBtn">
          <button type="submit">Delete Recipe</button>
          <button type="submit">Edit Recipe</button>
        </div>
      </div>

    </>
  );
}

export default Single;
