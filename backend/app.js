const express = require("express");
const app = express();
const morgan = require("morgan");
const recipesRoutes = require("./routes/recipes");
const commentRoutes = require("./routes/comments");
const { connect, sync } = require("./config/dbRecipes");

async function initalizeDB() {
  await connect();
  await sync();
}

initalizeDB();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use("/recipes", recipesRoutes);
app.use("/recipes", commentRoutes)


