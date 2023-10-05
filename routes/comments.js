const express = require("express");
const router = express.Router();
const { comments } = require("../commentData");

//get all comments in recipe by id
let currentcommentId = 3;
router.get("/:idRecipe/comments", (req, res) => {
  res.send(comments);
});

//create a comment in recipe by id
router.post("/:idRecipe/comments", (req, res) => {
    res.send(data);
});

//get update a comment in recipe by id
router.put("/:idRecipe/comments/:id", (req, res) => {
    res.send(data);
});

//delete  all comments in recipe by id
router.delete("/:idRecipe/comments", (req, res) => {
    res.send(data);
});

//delete  a comment in recipe by id
router.delete("/:idRecipe/comments/:id", (req, res) => {
    res.send(data);
});


module.exports = router;