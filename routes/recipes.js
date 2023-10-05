const express = require("express");
const { data } = require("../data");
const router = express.Router();

//get all recipes
router.get("/", (req, res) => {
  res.send(data);
});

//get recipe by id
router.get("/:id", (req, res) => {
  const recipesId = Number.parseInt(req.params.id);
  const recipes = data.find((recipes) => recipes.id === recipesId);

  res.json(recipes);
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

module.exports = router;
