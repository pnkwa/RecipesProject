const express = require("express");
const router = express.Router();
const { data } = require("../data");
const Recipes = require("../model/recipesModel");
//get all recipes
let currentRecipeId = 3;
router.get("/", async (req, res) => {
  const type = req.query.type;
  const options = req.query.options;
  const level = req.query.level;
  const nameQuery = req.query.name;
  // Filter recipes based on query parameters
  // Example URL: http://localhost:3000/recipes?options=vegetarian
  let recipesList = await Recipes.findAll();

  //get recipes by type
  if (type) {
    recipesList = recipesList.filter((recipe) => recipe.type === type);
  }
  //get recipes by options
  if (options) {
    recipesList = recipesList.filter((recipe) =>
      recipe.options.includes(options)
    );
  }
  //get recipes by level
  if (level) {
    recipesList = recipesList.filter(
      (recipe) => recipe.level === level
    );
  }
  //get recipes by name
  if (nameQuery) {
    recipesList = recipesList.filter((recipe) =>
      recipe.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
  }
  // Return all recipes if no query parameters are specified
  res.json(recipesList);
});

//get recipes by id
router.get("/:id", async(req, res) => {
  const recipe = await Recipes.findOne({
    where: {
      id: req.params.id,
    },
  })
  res.json(recipe);
});

//create recipe
router.post("/", async(req, res) => {
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


  const recipe = await Recipes.create({
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
  });

  //data.push(recipe);
  res.json(recipe);
});

//update recipes by id
router.put("/:id", async(req, res) => {
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

  const recipe = await Recipes.findOne({
    where: {
      id: req.params.id,
    }
  })

  // const recipeIndex = Recipes.findIndex(
  //   (recipe) => recipe.id === req.params.id
  // )

  // if(recipeIndex === -1) {
  //   return res.status(404).json({ message: "Recipe not found" });
  // }

  recipe.name = name;
  recipe.type = type;
  recipe.prep = prep;
  recipe.cook = cook;
  recipe.serving = serving;
  recipe.ingredients = ingredients;
  recipe.author = author;
  recipe.date = date;
  recipe.details = details;
  recipe.options = options;
  recipe.level = level;
  recipe.video = video;
  recipe.image = image;

  // recipe[recipeIndex] = {
  //   ...recipe
  // }

  await recipe.save();

  //res.json(recipe[recipeIndex]);
  res.json(recipe);
  
});

//delete recipe by id
router.delete("/:id", async(req, res) => {
  await Recipes.destroy({
    where: {
      id: req.params.id,
    }
  })

  res.sendStatus(204);
});

//get recipes by type

//get recipes by options

//get recipes by level

//get recipes by search

module.exports = router;