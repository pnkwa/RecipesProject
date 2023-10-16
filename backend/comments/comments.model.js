const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbRecipes");

Comments = sequelize.define("Comments", {
  idRecipe: {
    type: DataTypes.INTEGER, // Assuming it's a foreign key referencing recipe id
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING, // Assuming comments are text-based
  },
  user: {
    type: DataTypes.STRING, // Assuming the username is text
  },
  
});

module.exports = Comments;