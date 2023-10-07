import React from "react";

export default function Home() {
  return (
    <body>
      <header>
        <div class="logo">
          <a href="/">
            <img src="./images/logo/logo.png" alt="img" />
          </a>
        </div>
        <div class="category">
          <a href="/">Explore</a>
          <a href="/">Trending</a>
          <a href="/">Create Recipe</a>
        </div>
        <form action="" class="searchbar">
          <input type="text" placeholder="Look for yummy recipes!" />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </header>
      <div class="container">
        <div class="banner">
          <div class="trailer">
            <h1>Steak Frites</h1>
            <h2>
              "A classic French dish featuring a perfectly cooked steak and
              crispy French fries, often served with a flavorful sauce like
              Béarnaise."
            </h2>
            <button type="submit">Check Out</button>
          </div>
          <div class="slideshow">
            <img src="./images/recipe/steak.jpg" alt="img" />
          </div>
        </div>

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

            <div class="recipes_cards">
              <div class="card">
                <div class="recipe_img">
                  <img src="./images/recipe/steak.jpg" alt="img" />
                </div>
                <p>Steak&French fries</p>
                <button type="submit">Check Out</button>
              </div>

              <div class="card">
                <div class="recipe_img">
                  <img src="./images/recipe/steak.jpg" alt="img" />
                </div>
                <p>Steak&French fries</p>
                <button type="submit">Check Out</button>
              </div>

              <div class="card">
                <div class="recipe_img">
                  <img src="./images/recipe/steak.jpg" alt="img" />
                </div>
                <p>Steak&French fries</p>
                <button type="submit">Check Out</button>
              </div>

              <div class="card">
                <div class="recipe_img">
                  <img src="./images/recipe/steak.jpg" alt="img" />
                </div>
                <p>Steak&French fries</p>
                <button type="submit">Check Out</button>
              </div>

              <div class="card">
                <div class="recipe_img">
                  <img src="./images/recipe/steak.jpg" alt="img" />
                </div>
                <p>Steak&French fries</p>
                <button type="submit">Check Out</button>
              </div>

              <p>page 1/5</p>
            </div>
          </div>
        </div>

        <div class="end_banner">
          <h3>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </h3>
          <button type="submit">Check Out</button>
        </div>
      </div>
      <footer>
        <div class="slo_1">
          <p>Make us a part of your lifestyle</p>
          <p>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
          </p>
        </div>
        <div class="slo_2">
          <p>A taste of home in every dish</p>
        </div>
      </footer>
    </body>
  );
}
