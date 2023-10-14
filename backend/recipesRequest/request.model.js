const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbRecipes");

RequestRecipe = sequelize.define("RequestRecipe", {
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = RequestRecipe;