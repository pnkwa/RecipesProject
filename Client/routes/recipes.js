const express = require("express");
const router = express.Router();
const { data } = require("../data");

//get all recipes
let currentRecipeId = 3;

//get recipes by id
router.get("/:id", (req, res) => {
  const recipeId = Number.parseInt(req.params.id);
  const recipe = data.find((recipe) => recipe.id === recipeId);
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.json(recipe);
});

//create recipe
router.post("/", (req, res) => {
  const {
    name,
    type,
    prep,
    cook,
    serving,
    ingredients,
    author,
    date,
    details,
    options,
    level,
    video,
    image,
  } = req.body;

  const recipe = {
    id: currentRecipeId++,
    name,
    type,
    prep,
    cook,
    serving,
    ingredients,
    author,
    date,
    details,
    options,
    level,
    video,
    image,
  };

  data.push(recipe);
  res.json(recipe);
});

//update recipes by id
router.patch("/:id", (req, res) => {
  const recipeId = Number.parseInt(req.params.id);
  const recipeIndex = data.findIndex((recipe) => recipe.id === recipeId);

  if (recipeIndex === -1) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  data[recipeIndex] = {
    id: recipeId,
    ...req.body,
  };
  res.json(data[recipeIndex]);
});

//delete recipe by id
router.delete("/:id", (req, res) => {
  const recipesId = Number.parseInt(req.params.id);
  const recipesIndex = data.findIndex((recipes) => recipes.id === recipesId);
  data.splice(recipesIndex, 1);

  res.sendStatus(204);
});

//get recipes by search
router.get("/", (req, res) => {
  const type = req.query.type;
  const options = req.query.options;
  const level = req.query.level;

  // Filter recipes based on query parameters
  // Example URL: http://localhost:3000/recipes?options=vegetarian
  let filteredRecipes = data;

  //get recipes by type
  if (type) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.type === type);
  }
  //get recipes by options
  if (options) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.options.includes(options)
    );
  }
  //get recipes by level
  if (level) {
    filteredRecipes = filteredRecipes.filter(
      (recipe) => recipe.level === level
    );
  }

  //get recipes by name
  // if (name) {
  //   filteredRecipes = filteredRecipes.filter((recipe) => recipe.name === name);
  // }
  // Return all recipes if no query parameters are specified
  res.json(filteredRecipes);
});

module.exports = router;
