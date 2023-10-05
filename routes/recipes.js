const express = require("express");
const router = express.Router();
const { data } = require("../data");

//get all recipes
let currentRecipeId = 3;
router.get("/", (req, res) => {
  const type = req.query.type;
  const options = req.query.options;
  const level = req.query.level;
  const nameQuery = req.query.name;

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
  if (nameQuery) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
  }
  // Return all recipes if no query parameters are specified
  res.json(filteredRecipes);
});

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
router.put("/:id", (req, res) => {
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
  const recipeId = Number.parseInt(req.params.id);
  const recipeIndex = data.findIndex((recipe) => recipe.id === recipeId);

  if (recipeIndex === -1) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  data[recipeIndex] = {
    id: recipeId,
    ...req.body,
  };

  //   recipe.name = name;
  //   recipe.type = type;
  //   recipe.prep = prep;
  //   recipe.cook = cook;
  //   recipe.serving = serving;
  //   recipe.ingredients = ingredients;
  //   recipe.author = author;
  //   recipe.date = date;
  //   recipe.details = details;
  //   recipe.options = options;
  //   recipe.level = level;
  //   recipe.video = video;
  //   recipe.image = image;

  res.json(data[recipeIndex]);
});

//delete recipe by id

module.exports = router;
