const express = require("express");
const router = express.Router();
const Recipes = require("./recipes.model");
const { findAllRecipes, findRecipe, createRecipe, updateRecipe, deleteRecipe } = require("./recipes.service");

//get all recipes
router.get("/", async (req, res) => {
  findAllRecipes(req, res);
});

//get recipes by id
router.get("/:id", async (req, res) => {
  findRecipe(req, res);
});

//create recipe
router.post("/", async (req, res) => {
  createRecipe(req, res);
});

//update recipes by id
router.put("/:id", async (req, res) => {
  updateRecipe(req, res);
});

//delete recipe by id
router.delete("/:id", async (req, res) => {
  deleteRecipe(req, res);
});


module.exports = router;