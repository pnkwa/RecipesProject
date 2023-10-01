const express = require("express");
const morgan = require("morgan");
const app = express();
const recipesRoutes = require("./routes/recipes");

// Setting up middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up routes
app.use("/recipes", recipesRoutes);

// Creating a server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
