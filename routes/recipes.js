const express = require("express");
const router = express.Router();
const { data } = require("../data");

//get all recipes
let currentRecipeId = 3;
router.get("/", (req, res) => {
  res.send(data);
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

//get recipes by type
router.get("/types/:type", (req, res) => {
  const recipesType = req.params.type;
  console.log(recipesType);
  const recipes = data.filter((recipe) => recipe.type === recipesType);

  res.json(recipes);
});

//get recipes by options
router.get("/options/:option", (req, res) => {
  const recipesOption = req.params.option;
  console.log(recipesOption);
  const recipes = data.filter((recipe) =>
    recipe.options.includes(recipesOption)
  );

  res.json(recipes);
});

//get recipes by level
router.get("/levels/:level", (req, res) => {
  const recipesLevel = req.params.level;
  console.log(recipesLevel);
  const recipes = data.filter((recipe) => recipe.level === recipesLevel);

  res.json(recipes);
});

//get recipes by search
router.get("/", (req, res) => {
  const name = req.query.name;
  let queryData = data;
  if (name) {
    queryData = queryData.filter((recipe) => recipe.name === name);
  }

  res.json(queryData);
});

module.exports = router;
