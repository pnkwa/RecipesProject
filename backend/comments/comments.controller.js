const express = require("express");
const router = express.Router();
const Comments = require("./comments.model");
const { findAllComments, createComment, updateComment, deleteAllComments, deleteComment } = require("./comments.service");

//get all comments in recipe by id
router.get("/:idRecipe/comments", async (req, res) => {
  findAllComments(req, res);
});

//create a comment in recipe by id
router.post("/:idRecipe/comments", async (req, res) => {
  createComment(req, res);
});

//update a comment in recipe by id
router.put("/:idRecipe/comments/:id", async (req, res) => {
  updateComment(req, res);
});

//delete  all comments in recipe by id
router.delete("/:idRecipe/comments", async (req, res) => {
  deleteAllComments(req, res);
});

//delete a comment in recipe by id
router.delete("/:idRecipe/comments/:id", async (req, res) => {
  deleteComment(req, res);
});

module.exports = router;