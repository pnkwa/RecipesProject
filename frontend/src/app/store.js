import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recipesReducer from "../context/recipesReducer";
import usersReducer from "../context/usersReducer"; 

// Combine userReducer
const rootReducer = combineReducers({
    recipe: recipesReducer,
    user: usersReducer, 
  });

// Use the combined reducer  
  export default configureStore({
    reducer: rootReducer, 
  });