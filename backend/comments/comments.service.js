//get all comments in recipe by id
async function findAllComments(req, res) {
  try {
    const idRecipe = Number.parseInt(req.params.idRecipe);
    const recipeComments = await Comments.findAll({
      where: {
        idRecipe: idRecipe,
      },
    });

    if (recipeComments.length === 0) {
      return res.json({ message: "No comments found for this recipe" });
    }

    res.json(recipeComments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

//create a comment in recipe by id
async function createComment(req, res) {
  try {
    const idRecipe = Number.parseInt(req.params.idRecipe);
    const { text, user } = req.body;

    const newComment = await Comments.create({
      idRecipe,
      text,
      user,
    });

    res.json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

//update a comment in recipe by id
async function updateComment(req, res) {
  try {
    const idRecipe = Number.parseInt(req.params.idRecipe);
    const id = Number.parseInt(req.params.id);
    const { text } = req.body;

    const [rowsUpdated, [updatedComment]] = await Comments.update(
      { text },
      {
        where: { id, idRecipe },
        returning: true,
      }
    );

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json(updatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//delete  all comments in recipe by id
async function deleteAllComments(req, res) {
  try {
    const idRecipe = Number.parseInt(req.params.idRecipe);

    await Comments.destroy({
      where: {
        idRecipe: idRecipe,
      },
    });
    res.json({ message: "All comments deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

//delete a comment in recipe by id
async function deleteComment(req, res) {
  try {
    const idRecipe = Number.parseInt(req.params.idRecipe);
    const id = Number.parseInt(req.params.id);

    const deletedCount = await Comments.destroy({
      where: {
        id: id,
        idRecipe: idRecipe,
      },
    });

    if (deletedCount === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: "Comment deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  findAllComments,
  createComment,
  updateComment,
  deleteAllComments,
  deleteComment,
};
