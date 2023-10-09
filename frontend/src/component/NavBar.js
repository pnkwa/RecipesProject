import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

export default function NavBar() {
  return (
    <header>
      <div class="logo">
        <Link to="/">
          <img src="./images/logo/logo.png" alt="img" />
        </Link>
      </div>
      <div class="category">
        <a href="#scoll">Explore</a>
        <a href="/">Create Recipe</a>
      </div>
      <Search />
    </header>
  );
}