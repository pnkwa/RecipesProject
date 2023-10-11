import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

function LevelSelector({ className }) {
  const [data, setData] = useState([]);
  const [level, setLevel] = useState("");
  const baseURL = "http://127.0.0.1:8000/recipes";

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

  const levelClick = (event) => {
    const selectedLevel = event.target.value;
    setLevel(selectedLevel); 
  };

  return (
    <div className={className}>
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
    </div>
  );
}

LevelSelector.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(LevelSelector)`
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
