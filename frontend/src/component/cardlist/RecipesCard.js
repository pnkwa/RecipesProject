import React from "react";
import Card from "./Card";

export default function RecipesCard() {
  const cardData = [
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak2.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak2.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak2.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak2.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak.jpg" },
    { title: "Steak&French fries", imgURL: "../../images/recipe/steak.jpg" },
  ];

  return (
    <div class="recipes_cards" id="scoll">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} imgURL={card.imgURL} />
      ))}
    </div>
  );
}
