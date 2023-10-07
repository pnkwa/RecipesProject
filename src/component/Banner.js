import React from "react";

export default function Banner() {
  return (
    <div class="banner">
      <div class="trailer">
        <h1>Steak Frites</h1>
        <h2>
          "A classic French dish featuring a perfectly cooked steak and crispy
          French fries, often served with a flavorful sauce like Béarnaise."
        </h2>
        <a type="submit">Check Out</a>
      </div>
      <div class="slideshow">
        <img src="./images/recipe/steak.jpg" alt="img" />
      </div>
    </div>
  );
}
