import React from "react";
import Card from "./Card";
import styled from "styled-components";
import PropTypes from "prop-types";

function RecipesCard({ className, data, loading, error }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={className}>
      <div className="recipes_cards" id="scoll">
        {data.map((recipe, index) => (
          <Card key={index} recipeData={recipe} />
        ))}
      </div>
    </div>
  );
}

RecipesCard.propTypes = {
  className: PropTypes.string.isRequired,
  recipeCardData: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
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
