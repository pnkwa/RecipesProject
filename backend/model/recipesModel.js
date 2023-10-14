const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbRecipes");
Recipes = sequelize.define("Recipes", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  prepTime: {
    type: DataTypes.INTEGER, //minutes
  },
  cookTime: {
    type: DataTypes.INTEGER, //minutes
  },
  serving: {
    type: DataTypes.INTEGER, //number of servings
  },
  ingredients: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Use ARRAY for an array of ingredients
  },
  author: {
    type: DataTypes.STRING,
  },
  steps: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Use ARRAY for an array of details
  },
  options: {
    type: DataTypes.STRING, 
  },
  level: {
    type: DataTypes.STRING,
  },
  video: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Use ARRAY for an array of images
  },
});

module.exports = Recipes;