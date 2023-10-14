// Get all recipes requests
async function findAllReq(req, res) {
  try {
    const reqRecipes = await RequestRecipe.findAll(); // Use the RequestRecipe model
    res.json(reqRecipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching recipes requests" });
  }
}

// Create a new request
async function createReq(req, res) {
  try {
    const { author, message } = req.body;
    const newRequest = await RequestRecipe.create({
      author,
      message,
    });
    res.json(newRequest);
  } catch (err) {
    res.status(500).json({ error: "Error creating new request" });
  }
}

async function deleteAllReq(req, res) {
  try {
    await RequestRecipe.destroy({
      where: {},
      truncate: true,
    });
    res.sendStatus(204); // No content status
  } catch (err) {
    res.status(500).json({ error: "Error deleting recipes requests" });
  }
}

module.exports = {
  findAllReq,
  createReq,
  deleteAllReq
};
