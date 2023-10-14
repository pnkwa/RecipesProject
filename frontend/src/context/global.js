import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingAction,
  searchAction,
  getAllRecipesAction,
  getRecipeAction,
  createRecipeAction,
  updateRecipeAction,
  deleteRecipeAction,
} from "./recipesAction";

import {
  getCommentsAction,
  createCommentAction,
  updateCommentAction,
  deleteAllCommentsAction,
  deleteCommentAction,
} from "./usersAction";

const GlobalContext = createContext();
const baseURL = "http://127.0.0.1:8000/recipes";

const GlobalContextProvider = ({ children }) => {
  const loading = useSelector((state) => state.recipe.loading);
  const recipes = useSelector((state) => state.recipe.recipes);

  const dispatchRecipes = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e);
  };

  //get all recipes

  const getAllRecipes = async () => {
    dispatchRecipes(loadingAction); 
    try {
      const response = await axios.get(`${baseURL}`);
      console.log(response.data.data);
      dispatchRecipes(getAllRecipesAction(response.data.data)); // Dispatch data update action
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };


  return (
    <GlobalContext.Provider
      value={{
        loading, recipes, search, handleSearchChange, getAllRecipes 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalContextProvider, useGlobalContext };