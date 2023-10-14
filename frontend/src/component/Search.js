import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

function Search({ className }) {
  const [search, setSearch] = useState("");
  const [name, setName] = useState([]);
  const baseURL = "http://127.0.0.1:8000/recipes";

  const handleSearchChange = (e) => {
    setSearch(e);
  };

  useEffect(() => {
    if (search) {
      const apiURL = `${baseURL}?title=${search}`;
      axios.get(apiURL).then((res) => {
        setName(res.data);
        console.log(name);
      });
    }
  }, [search]);

  return (
    <div className={className}>
      <form action="" className="searchbar">
        <input
          type="text"
          placeholder="Look for yummy recipes!"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        {name && name[0] && name[0].id ? (
          <Link to={`/recipes/${name[0].id}`}>
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        ) : (
          <button type="submit" disabled aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        )}
      </form>
    </div>
  );
}
Search.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Search)`
  .searchbar {
    background: #fff;
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
`;
