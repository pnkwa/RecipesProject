const express = require("express");
const router = express.Router();
const { comments } = require("../commentData");

let currentcommentId = 5;

//get all comments in recipe by id
router.get("/:idRecipe/comments", (req, res) => {
  const idRecipe = Number.parseInt(req.params.idRecipe);
  const recipeComments = comments.filter(
    (comment) => comment.idRecipe === idRecipe
  );
  if (recipeComments.length === 0) {
    return res.json({ message: "No comments found for this recipe" });
  }
  res.json(recipeComments);
});

//create a comment in recipe by id
router.post("/:idRecipe/comments", (req, res) => {
  const idRecipe = Number.parseInt(req.params.idRecipe);
  const { text, user } = req.body;

  const newCommentId = currentcommentId++;
  const timestamp = new Date().toISOString();

  const newComment = {
    id: newCommentId,
    idRecipe: idRecipe,
    text,
    user,
    timestamp,
  };

  comments.push(newComment);
  res.json(newComment);
});

router.put("/:idRecipe/comments/:id", (req, res) => {
  const idRecipe = Number.parseInt(req.params.idRecipe);
  const id = Number.parseInt(req.params.id);
  const { text } = req.body;

  const timestamp = new Date().toISOString();
  const comment = comments.find(
    (comment) => comment.id === id && comment.idRecipe === idRecipe
  );
  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }
  comment.text = text;
  comment.timestamp = timestamp;
  res.json(comment);
});

//delete  all comments in recipe by id
router.delete("/:idRecipe/comments", (req, res) => {
  const idRecipe = Number.parseInt(req.params.idRecipe);

  const deletedComments = comments.filter(
    (comment) => comment.idRecipe !== idRecipe
  );
  comments = deletedComments;
});

//delete a comment in recipe by id
router.delete("/:idRecipe/comments/:id", (req, res) => {
  const idRecipe = Number.parseInt(req.params.idRecipe);
  const id = Number.parseInt(req.params.id);

  const commentIndex = comments.findIndex(
    (comment) =>
      comment.id === id && comment.idRecipe === idRecipe
  );
  if (commentIndex === -1) {
    return res.status(404).json({ message: "Comment not found" });
  }
  comments.splice(commentIndex, 1);

  res.json({ message: "Comment deleted" });
});

module.exports = router;
