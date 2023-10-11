import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Search from "./Search";

function NavBar({ className }) {
  return (
    <div className={className}>
      <header>
        <div class="logo">
          <Link to="/">
            <img src="../images/logo/logo.png" alt="img" />
          </Link>
        </div>
        <div class="category">
          <Link to={"/add"}>Create Recipe</Link>
        </div>
        <Search />
      </header>
    </div>
  );
}

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(NavBar)`
  header {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    background: #f4efdc;
    transition: all ease 0.5s;
    padding: 5px 30px 5px 30px;
  }
  header .logo img {
    display: flex;
    align-items: center;
    width: 90px;
  }

  header .category {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    width: 30%;
  }

  header .category a {
    text-decoration: none;
    color: #e23c34;
    border-radius: 30px;
    padding: 10px;
    border: 1px solid #e23d3400;
    transition: 0.3s ease, color 0.3s ease;
  }

  header .category a:hover {
    text-decoration: none;
    color: #e23c34;
    background-color: #fdee82;
    border: 1px solid #e23c34;
    border-radius: 30px;
    padding: 10px;
    transition: 0.3s ease;
  }
`;