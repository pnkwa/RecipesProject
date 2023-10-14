import { createAction } from "@reduxjs/toolkit";

//actions
export const loadingAction = createAction("LOADING");
export const searchAction = createAction("SEARCH");
export const getAllRecipesAction = createAction("GET_ALLRECIPES");
export const getRecipeAction = createAction("GET_RECIPE");
export const createRecipeAction = createAction("CREATE_RECIPE");
export const updateRecipeAction = createAction("UPDATE_RECIPE");
export const deleteRecipeAction = createAction("DELETE_RECIPE");