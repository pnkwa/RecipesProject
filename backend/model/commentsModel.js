const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbRecipes");

Comments = sequelize.define("Comments", {
  idRecipe: {
    type: DataTypes.INTEGER, //a foreign key referencing recipe id
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING, // comments are text-based
  },
  user: {
    type: DataTypes.STRING, // the username is text
  },
  
});

module.exports = Comments;