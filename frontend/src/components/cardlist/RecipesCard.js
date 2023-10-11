import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import PropTypes from "prop-types";

function RecipesCard({ className }) {
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
    <div className={className}>
      <div className="recipes_cards" id="scoll">
        {recipeCardData.map((recipe, index) => (
          <Card key={index} recipeData={recipe} />
        ))}
      </div>
    </div>
  );
}

RecipesCard.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(RecipesCard)`
  .recipes_cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 10px;
    margin-top: 50px;
  }
`;