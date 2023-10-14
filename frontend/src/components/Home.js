import React, { useEffect, useState } from "react";
import RecipesCard from "./cardlist/RecipesCard";
import Banner from "./Banner";
import TimeSlider from "./TimeSlider";
import LevelSelector from "./LevelSelector";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Home({ className }) {
  const [data, setData] = useState([]);
  const [selectType, setSelectType] = useState(null);
  const [selectOptions, setSelectOptions] = useState(null);
  const baseURL = "http://127.0.0.1:8000/recipes";

  useEffect(() => {
    if (selectType) {
      const apiURL = `${baseURL}?type=${selectType}`;
      axios
        .get(apiURL)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectType]);

  useEffect(() => {
    if (selectOptions) {
      const apiURL = `${baseURL}?options=${selectOptions}`;
      axios
        .get(apiURL)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectOptions]);

  const handleType = (dishType) => {
    setSelectType(dishType);
  };

  const handleOptions = (dishOptions) => {
    setSelectOptions(dishOptions);
  };


  const handleSubmitReq = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className={className}>
      <Banner />
      {/* ower names */}
      <div class="creator">
        <div class="cards">
          <div class="owner">
            <div class="ownerimg">
              <img src="../images/owner/KwanJai.jpg" alt="img" />
            </div>
            <div class="ownerdetails">
              <h3>Kittipat Saiud</h3>
              <p>652110270</p>
            </div>
          </div>
          <div class="owner">
            <div class="ownerimg">
              <img src="../images/owner/Lugie.jpg" alt="img" />
            </div>
            <div class="ownerdetails">
              <h3>Luca Gomis</h3>
              <p>652110300</p>
            </div>
          </div>
          <div class="owner">
            <div class="ownerimg">
              <img src="../images/owner/KwaKwa.jpg" alt="img" />
            </div>
            <div class="ownerdetails">
              <h3>Prapanit Pajeekum</h3>
              <p>652110292</p>
            </div>
          </div>
        </div>
      </div>
      {/* ower names */}

      <div class="recipes_lists">
        <div class="optionsbar">
          <button type="submit" onClick={() => handleOptions("spicy")}>
            Spicy
          </button>
          <button type="submit" onClick={() => handleOptions("non-spicy")}>
            Non-spicy
          </button>
          <button type="submit" onClick={() => handleOptions("vegetarian")}>
            Vegetarian
          </button>
          <button type="submit" onClick={() => handleOptions("vegan")}>
            Vegan
          </button>
        </div>

        <div class="recipes_box">
          <div class="sidebar">
            <div class="type">
              <h2>Dish Type</h2>
              <a onClick={() => handleType("breakfast")}>Breakfast</a>
              <a onClick={() => handleType("lunch")}>Lunch</a>
              <a onClick={() => handleType("dinner")}>Dinner</a>
              <a onClick={() => handleType("appetizer")}>Appetizer</a>
              <a onClick={() => handleType("salad")}>Salad</a>
              <a onClick={() => handleType("main-course")}>Main-course</a>
              <a onClick={() => handleType("baked-goods")}>Baked-goods</a>
              <a onClick={() => handleType("dessert")}>Dessert</a>
              <a onClick={() => handleType("soup")}>Soup</a>
            </div>

            <TimeSlider />
            <LevelSelector />
          </div>
          <RecipesCard />
        </div>
      </div>

      <div class="end_banner">
        <h2>
          "You've been trying to find a recipe, but you can't seem to find it in
          Recipe Box? Tell us!"
        </h2>
        {/* <button type="submit">Request recipe</button> */}
        <Popup
          trigger={<button type="submit">Request recipe</button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                <h1>Request recipe</h1>
                <div>
                  <div>
                    <h3>Name</h3>
                    <input type="text" />
                  </div>
                  <div>
                    <h3>Request message</h3>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => close()}>Submit</button>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Home)`
  .creator {
    border-bottom: 1px solid #e23c34;
  }

  .creator .cards {
    background-image: linear-gradient(
        to right,
        #f4efdc 0%,
        transparent 20%,
        transparent 90%,
        #f4efdc 100%
      ),
      linear-gradient(
        to left,
        #f4efdc 0%,
        transparent 20%,
        transparent 90%,
        #f4efdc 100%
      ),
      url(../images/recipe/background.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }

  .creator .owner {
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 20px;
    padding: 5px;
    width: 250px;
    height: 350px;
  }
  .owner .ownerimg {
    width: 100%;
    height: 70%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .ownerimg img {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
  }
  .owner .ownerdetails {
    color: #e23c34;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .owner .ownerdetails p {
    padding: 5px;
    margin-top: 5px;
    background-color: #fdee82;
    border-radius: 30px;
    width: 60%;
  }

  .recipes_lists {
    margin-top: 50px;
    border-bottom: 1px solid #e23c34;
  }
  .recipes_lists .optionsbar {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    flex-wrap: wrap;
  }

  .recipes_lists .recipes_box {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
  .optionsbar button {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    padding: 10px;
    margin: 10px;
    border-radius: 30px;
    width: 150px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }

  .optionsbar button:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
  .sidebar .type {
    padding-bottom: 30px;
    margin-right: 50px;
    border-bottom: 1px solid #e23c34;
  }
  .sidebar {
    width: 300px;
    margin: 10px;
    color: #e23c34;
    font-weight: bold;
  }

  .recipes_lists .sidebar a {
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    text-decoration: none;
    color: #e23c34;
    border: 1px solid #e23d3400;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    transition: 0.3s ease, color 0.3s ease;
  }
  .recipes_lists .sidebar a:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    border-radius: 30px;
  }

  .end_banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 500px;
    color: #e23c34;
    border-bottom: 1px solid #e23c34;
  }

  .end_banner h2 {
    width: 50%;
  }

  .end_banner button {
    background-color: #e23c34;
    border: 1px solid #e23c34;
    padding: 10px;
    margin: 10px;
    border-radius: 30px;
    width: 150px;
    color: #fff;
    transition: 0.3s ease, color 0.3s ease;
    cursor: pointer;
    font-size: medium;
  }

  .end_banner button:hover {
    background-color: #fdee82;
    border: 1px solid #e23c34;
    color: #e23c34;
  }
`;
