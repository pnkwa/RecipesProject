const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
// const path = require("path");
const recipesRoutes = require("./routes/recipes");
const commentRoutes = require("./routes/comments");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "../frontend/public")));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use("/recipes", recipesRoutes);
app.use("/recipes", commentRoutes);

