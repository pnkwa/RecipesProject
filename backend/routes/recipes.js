const express = require("express");
const router = express.Router();
const Recipes = require("../model/recipesModel");

//get all recipes
router.get("/", async (req, res) => {
  const type = req.query.type;
  const options = req.query.options;
  const level = req.query.level;
  const title = req.query.name;
  const total = req.query.total;

  // Filter recipes based on query parameters
  // Example URL: http://localhost:3000/recipes?options=vegetarian
  let recipesList = await Recipes.findAll();

  //get recipes by type
  if (type) {
    recipesList = recipesList.filter((recipe) => recipe.type === type);
  }
  //get recipes by options
  if (options) {
    recipesList = recipesList.filter((recipe) => recipe.options === options);
  }
  //get recipes by level
  if (level) {
    recipesList = recipesList.filter((recipe) => recipe.level === level);
  }
  //get recipes by title
  if (title) {
    recipesList = recipesList.filter((recipe) =>
      recipe.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  // Filter recipes by total time (prep + cook)
  if (total) {
    recipesList = recipesList.filter(
      (recipe) => recipe.prepTime + recipe.cookTime <= Number(total)
    );
  }

  // Return all recipes if no query parameters are specified
  res.json(recipesList);
});

//get recipes by id
router.get("/:id", async (req, res) => {
  const recipe = await Recipes.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(recipe);
});

//create recipe
router.post("/", async (req, res) => {
  const {
    title,
    description,
    type,
    prepTime,
    cookTime,
    serving,
    ingredients,
    author,
    steps,
    options,
    level,
    video,
    image,
  } = req.body;

  const recipe = await Recipes.create({
    title,
    description,
    type,
    prepTime,
    cookTime,
    serving,
    ingredients,
    author,
    steps,
    options,
    level,
    video,
    image,
  });

  //data.push(recipe);
  res.json(recipe);
});

//update recipes by id
router.put("/:id", async (req, res) => {
  const {
    title,
    description,
    type,
    prepTime,
    cookTime,
    serving,
    ingredients,
    author,
    steps,
    options,
    level,
    video,
    image,
  } = req.body;

  const recipe = await Recipes.findOne({
    where: {
      id: req.params.id,
    },
  });

  // const recipeIndex = Recipes.findIndex(
  //   (recipe) => recipe.id === req.params.id
  // )

  // if(recipeIndex === -1) {
  //   return res.status(404).json({ message: "Recipe not found" });
  // }

  recipe.title = title;
  recipe.description = description;
  recipe.type = type;
  recipe.prepTime = prepTime;
  recipe.cookTime = cookTime;
  recipe.serving = serving;
  recipe.ingredients = ingredients;
  recipe.author = author;
  recipe.steps = steps;
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
router.delete("/:id", async (req, res) => {
  await Recipes.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.sendStatus(204);
});

module.exports = router;
