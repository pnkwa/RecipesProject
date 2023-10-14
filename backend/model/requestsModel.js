const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbRecipes");
Requests = sequelize.define("Requests", {
  author: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING, 
  },
});

module.exports = Requests;