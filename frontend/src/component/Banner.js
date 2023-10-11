import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Banner({ className }) {
  return (
    <div className={className}>
      <div className="banner">
        <div className="trailer">
          <h1>Steak Frites</h1>
          <h2>
            "A classic French dish featuring a perfectly cooked steak and crispy
            French fries, often served with a flavorful sauce like Béarnaise."
          </h2>
          <a href="#scoll">Explore</a>
        </div>
        <div className="slideshow">
          <img src="../images/recipe/steak.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Banner)`
  .banner {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    height: 550px;
    border-bottom: 1px solid #e23c34;
    border-top: 1px solid #e23c34;
  }
  .trailer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    color: #e23c34;
  }
  .trailer a {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    text-decoration: none;
    padding: 10px;
    border-radius: 30px;
    width: 150px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }
  .trailer a:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }

  .trailer h2 {
    font-weight: normal;
    padding: 10px;
  }

  .slideshow {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .slideshow img {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
  }
`;
