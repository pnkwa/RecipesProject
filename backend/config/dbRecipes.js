const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    "recipes", // database
    "postgres", // username
    "123456", // password
    {
        host: "localhost", // host
        dialect: "postgres" // dialect
    }
);

async function connect(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

async function sync(){
    await sequelize.sync();
    console.log(
        'Connection has been established successfully to the database.'
    )
}

module.exports = {
    sequelize,
    connect,
    sync
}