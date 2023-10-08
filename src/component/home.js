import React from "react";
import RecipesCard from "../component/CardList/RecipesCard";
import Banner from "../component/Banner";
import Time from "../component/Time";
import Level from "../component/Level";

export default function Home() {
  return (
    <>
      <body>
        <div class="container">
          {/* Banner Component */}
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

          <div class="recipes_lists">
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

                {/* Time Component */}
                <Time />

                <Level />
              </div>

              {/* RecipesCard Component */}
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
