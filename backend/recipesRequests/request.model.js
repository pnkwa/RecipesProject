const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbRecipes");

Requests = sequelize.define("Requests", {
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Requests;