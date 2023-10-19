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
      <div className="searchbar">
      <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Look for yummy recipes!"
          value={value}
          onChange={handleOnChange}
        />
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchText = value.toLowerCase();
            const name = item.title.toLowerCase();

            return (
              searchText && name.startsWith(searchText) && name !== searchText
            );
          })
          .map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSearch(item.title);
              }}
              className="dropdown-row"
            >
              <Link to={`/recipes/${item.id}`} className="selection-recipe">
                {item.title}
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
    position: relative;
    z-index:1;
  }
  .searchbar input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    font-size: 15px;
    height: 40px;

  }
  .searchbar ::placeholder {
    color: #ababab;
  }

  .searchbar i {
    display: flex;
    align-items: center;
    color: #eee;
    padding: 10px;
    border-radius: 50%;
  }

  .dropdown {
    background-color: #fff;
    border-radius: 10px;
    top: 60px;
    position: absolute;
    overflow-y: auto;
    padding: 5px
  }
  .dropdown:empty {
    border: none;
  }
  .dropdown-row {
    cursor: pointer;
    text-align: center;
    margin: 2px 0;
    padding: 5px;
    border-radius: 20px;
    width: 220px;
  }
  .dropdown-row:hover {
    background-color:  #fdee82;
    border-radius: 15px;
    transition: 0.3s ease, color 0.3s ease;
  }
  .selection-recipe {
    color: black;
    text-decoration: none;
  }
`;