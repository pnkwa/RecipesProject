const express = require("express");
const app = express();
const morgan = require("morgan");
const recipesRoutes = require("./routes/recipes");
const commentRoutes = require("./routes/comments");

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use("/recipes", recipesRoutes);
app.use("/recipes", commentRoutes);
