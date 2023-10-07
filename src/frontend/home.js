import React from "react";
import RecipesCard from "../component/recipesCard";
import Banner from "../component/Banner";

export default function Home() {
  return (
    <>
      <body>
        <div class="container">
          <Banner />

          <div class="creator">
            <div class="cards">
              <div class="owner">
                <div class="ownerimg">
                  <img src="./images/owner/KwanJai.jpg" alt="img" />
                </div>
                <div class="ownerdetails">
                  <h3>Kittipat Saiud</h3>
                  <p>652110270</p>
                </div>
              </div>

              <div class="owner">
                <div class="ownerimg">
                  <img src="./images/owner/Lugie.jpg" alt="img" />
                </div>
                <div class="ownerdetails">
                  <h3>Luca Gomis</h3>
                  <p>652110300</p>
                </div>
              </div>

              <div class="owner">
                <div class="ownerimg">
                  <img src="./images/owner/KwaKwa.jpg" alt="img" />
                </div>
                <div class="ownerdetails">
                  <h3>Prapanit Pajeekum</h3>
                  <p>652110292</p>
                </div>
              </div>
            </div>
          </div>

          <div class="recipes_lists" id="scoll">
            <div class="optionsbar">
              <button type="submit">Spicy</button>
              <button type="submit">Non-spicy</button>
              <button type="submit">Vegetarian</button>
              <button type="submit">Vegan</button>
            </div>

            <div class="recipes_box">
              <div class="sidebar">
                <div class="type">
                  <h2>Dish Type</h2>
                  <a href="/">Breakfast</a>
                  <a href="/">Lunch</a>
                  <a href="/">Dinner</a>
                  <a href="/">Appetizer</a>
                  <a href="/">Salad</a>
                  <a href="/">Main-course</a>
                  <a href="/">Baked-goods</a>
                  <a href="/">Dessert</a>
                  <a href="/">Soup</a>
                </div>

                <div class="time">
                  <h2>Time</h2>
                  <p>double range slider html</p>
                  <p>10 min</p>
                  <p>40 min</p>
                </div>

                <div class="level">
                  <h2>Level</h2>
                  <div class="box">
                    <div class="string">
                      <p>Easy</p>
                      <p>Medium</p>
                      <p>Hard</p>
                    </div>
                    <div class="icon">
                      <p>⦿</p>
                      <p>⦿⦿</p>
                      <p>⦿⦿⦿</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RecipesCard */}
              <RecipesCard />
            </div>
          </div>

          <div class="end_banner">
            <h2>
              "You've been trying to find a recipe, but you can't seem to find
              it in Recipe Box? Tell us!"
            </h2>
            <button type="submit">Request recipe</button>
          </div>
        </div>
      </body>
    </>
  );
}
