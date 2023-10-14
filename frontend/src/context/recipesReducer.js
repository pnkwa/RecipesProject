import { createReducer } from "@reduxjs/toolkit";
import {
  loadingAction,
  searchAction,
  getAllRecipesAction,
  getRecipeAction,
  createRecipeAction,
  updateRecipeAction,
  deleteRecipeAction,
} from "./recipesAction";

const initialState = {
  loading: false,
  searchResults: [],
  recipes: [],
  getRecipe: null,
};

export default createReducer(initialState, {
  [loadingAction]: (state) => {
    state.loading = true;
  },
  [searchAction]: (state, action) => {
    state.searchResults = action.payload;
    state.loading = false;
    console.log(state.searchResults);
  },
  [getAllRecipesAction]: (state, action) => {
    state.recipes = action.payload;
    state.loading = false;
  },
  [getRecipeAction]: (state, action) => {
    state.getRecipe = action.payload;
    state.loading = false;
  },
  [createRecipeAction]: (state, action) => {
    state.recipes.push(action.payload);
    state.loading = false;
  },
  [updateRecipeAction]: (state, action) => {
    const updatedRecipe = action.payload;
    const recipeIndex = state.recipes.findIndex(
      (recipe) => recipe.id === updatedRecipe.id
    );
    if (recipeIndex !== -1) {
      state.recipes[recipeIndex] = updatedRecipe;
    }
    state.loading = false;
  },
  [deleteRecipeAction]: (state, action) => {
    const recipeIdToDelete = action.payload;
    state.recipes = state.recipes.filter(
      (recipe) => recipe.id !== recipeIdToDelete
    );
    state.loading = false;
  },
});
