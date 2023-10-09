import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function RecipesCard() {
  const [recipeCardData, setrecipeCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/recipes/`)
      .then((response) => {
        setrecipeCardData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="recipes_cards" id="scoll">
      {recipeCardData.map((recipe, index) => (
        <Card key={index} recipeData={recipe} />
      ))}
    </div>
  );
}
