const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbRecipes");
Recipes = sequelize.define("Recipes", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  prep: {
    type: DataTypes.INTEGER, //minutes
  },
  cook: {
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
  details: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Use ARRAY for an array of details
  },
  options: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Use ARRAY for an array of options
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
