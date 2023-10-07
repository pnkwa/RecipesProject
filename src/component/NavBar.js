import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <body>
      <header>
        <div class="logo">
          <Link to="/">
            <img src="./images/logo/logo.png" alt="img" />
          </Link>
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
    </body>
  );
}
