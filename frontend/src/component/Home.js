import React, { useRef, useEffect, useState } from "react";
import RecipesCard from "./cardlist/RecipesCard";
import Banner from "./Banner";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

function Home({ className }) {
  const [data, setData] = useState([]);
  const [selectType, setSelectType] = useState(null);
  const [selectOptions, setSelectOptions] = useState(null);
  const [sliderValue, setSliderValue] = useState(40);
  const [level, setLevel] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sliderRef = useRef(null);
  const outputRef = useRef(null);
  
  const baseURL = "http://127.0.0.1:8000/recipes";

  //get all
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  //get by type
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

  //get by options
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

  //get by time
  useEffect(() => {
    const apiURL = `${baseURL}?total=${sliderValue}`;
    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [sliderValue]);

  
  // get by level
  useEffect(() => {
    if (level) {
      const apiURL = `${baseURL}?level=${level}`;
      axios
        .get(apiURL)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [level]);


  //time slider useRef
  useEffect(() => {
    const slider = sliderRef.current;
    const output = outputRef.current;

    if (slider && output) {
      slider.addEventListener("input", handleSliderChange);
      return () => slider.removeEventListener("input", handleSliderChange);
    }
  }, []);

//functions
  const handleType = (dishType) => {
    setSelectType(dishType);
  };

  const handleOptions = (dishOptions) => {
    setSelectOptions(dishOptions);
  };

  const handleSliderChange = () => {
    const slider = sliderRef.current;
    const output = outputRef.current;

    if (slider && output) {
      var value =
        ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      var color =
        "linear-gradient(to right, #e23c34 0%, #e23c34 " +
        value +
        "%, #d3d3d3 " +
        value +
        "%, #d3d3d3 100%)";
      slider.style.background = color;
      output.innerHTML = slider.value;
      setSliderValue(slider.value);
    }
  };

  const levelClick = (event) => {
    const selectedLevel = event.target.value;
    setLevel(selectedLevel);
  };

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
            {/* time */}
            <div className="time">
              <label>
                <h2>Time</h2>
              </label>

              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={sliderValue}
                  className="slider"
                  ref={sliderRef}
                />
                <p>
                  <span ref={outputRef}>40</span> min
                </p>
              </div>
            </div>
            {/* time */}
            {/* level */}
            <div className="level">
              <h2>Level</h2>
              <div className="box">
                <div className="icon">
                  <form action="/">
                    <input
                      type="radio"
                      id="easy"
                      name="level"
                      value="easy"
                      checked={level === "easy"}
                      onChange={levelClick}
                    />
                    <label htmlFor="easy">Easy</label>
                    <br />

                    <input
                      type="radio"
                      id="medium"
                      name="level"
                      value="medium"
                      checked={level === "medium"}
                      onChange={levelClick}
                    />
                    <label htmlFor="medium">Medium</label>
                    <br />

                    <input
                      type="radio"
                      id="hard"
                      name="level"
                      value="hard"
                      checked={level === "hard"}
                      onChange={levelClick}
                    />
                    <label htmlFor="hard">Hard</label>
                    <br />
                  </form>
                </div>
              </div>
            </div>
            {/* level */}
          </div>
          <RecipesCard data={data} loading={loading} error={error} />
        </div>
      </div>

      <div class="end_banner">
        <h2>
          "You've been trying to find a recipe, but you can't seem to find it in
          Recipe Box? Tell us!"
        </h2>
        <button type="submit">Request recipe</button>
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

  .time {
    border-bottom: 1px solid #e23c34;
    margin-right: 50px;
    padding: 10px 0 10px 0;
  }
  .slider-container {
    width: 100%;
    text-align: center;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(
      to right,
      #e23c34 0%,
      #e23c34 20%,
      #d3d3d3 0%,
      #d3d3d3 100%
    );
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #e23c34;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #e23c34;
    cursor: pointer;
  }

  .level {
    padding-top: 20px;
    margin-right: 50px;
  }
  .level .box {
    background-color: #fff;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
  }
  label {
    padding-left: 30px;
  }

  input[type="radio"]:checked {
    accent-color: #e23c34;
    cursor: pointer;
  }
  input[type="radio"] {
    cursor: pointer;
  }
`;
