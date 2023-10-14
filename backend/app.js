const express = require("express");
const app = express();
const morgan = require("morgan");
const recipesRoutes = require("./recipes/recipes.controller");
const commentRoutes = require("./comments/comments.controller");
const requestRecipeRoutes = require("./recipesRequest/request.controller");
const { connect, sync } = require("./config/dbRecipes");
const cors = require("cors");

async function initalizeDB() {
  await connect();
  await sync();
}

initalizeDB();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow requests from all origins (you can specify specific origins if needed)
app.use(cors());
app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use("/recipes", recipesRoutes);
app.use("/recipes", commentRoutes);
app.use(requestRecipeRoutes);
