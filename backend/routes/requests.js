const express = require("express");
const router = express.Router();
const Requests = require("../model/requestsModel");

//get all request
router.get("/req", async (req, res) => {
  try {
    const requestsList = await Requests.findAll();
    res.json(requestsList);
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).send("Error fetching requests");
  }
});

//post a request
router.post("/req", async (req, res) => {
  const { author, text } = req.body;
  const request = await Requests.create({
    author,
    text,
  });
  res.json(request);
});

//delete all request
router.delete("/req", async (req, res) => {
  await Requests.destroy({
    where: {},
    truncate: true,
  });
  res.sendStatus(204);
});

module.exports = router;
