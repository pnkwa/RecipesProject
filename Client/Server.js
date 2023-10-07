const express = require("express");
const server = express();
const morgan = require("morgan");
const recipesRoutes = require("./routes/recipes");
const commentRoutes = require("./routes/comments");

server.use(morgan("tiny"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.listen(3001, () => {
  console.log("Listening on port 3001");
});

server.use("/recipes", recipesRoutes);
server.use("/recipes", commentRoutes);
