import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

function Search({ className }) {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const baseURL = "http://localhost:8000/recipes";

  useEffect(() => {
    // Fetch data and store it in the 'data' state
    axios
      .get(`${baseURL}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchText) => {
    setValue(searchText);
  };

  return (
    <div className={className}>
      <div class="searchbar">
        <input
          type="text"
          placeholder="Look for yummy recipes!"
          value={value}
          onChange={handleOnChange}
        />
      </div>
      <div class="dropdown">
        {data
          .filter((item) => {
            const searchText = value.toLowerCase();
            const name = item.name.toLowerCase();

            return (
              searchText && name.startsWith(searchText) && name !== searchText
            );
          })
          .map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSearch(item.name);
              }}
              class="dropdown-row"
            >
              <Link to={`/recipes/${item.id}`} class="selection-recipe">
                {item.name}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
Search.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Search)`
  .searchbar {
    background: #fff;
    display: flex;
    border-radius: 60px;
  }
  .searchbar input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    font-size: 15px;
    height: 40px;
    margin-left: 10px;
  }
  .searchbar ::placeholder {
    color: #ababab;
  }

  .searchbar button i {
    width: 30px;
    height: 30px;
    background: #e23c34;
    color: #fff;
    padding: 8px;
    border-radius: 50%;
    margin-right: 5px;
    border: 1px solid #e23c34;
    transition: 0.3s ease, color 0.3s ease;
  }

  .searchbar button {
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
  }

  .searchbar button:hover i {
    background-color: #fdee82;
    color: #e23c34;
    border: 1px solid #e23c34;
  }

  .dropdown {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  .dropdown:empty {
    border: none;
  }
  .dropdown-row {
    cursor: pointer;
    text-align: center;
    margin: 2px 0;
  }
  .selection-recipe {
    color: black;
    text-decoration: none;
  }
`;
