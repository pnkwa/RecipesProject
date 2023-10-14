const express = require("express");
const router = express.Router();
const RequestRecipe = require("./request.model");
const { findAllReq, createReq, deleteAllReq } = require("./request.service");

// Get all recipes requests

router.get("/admin/req", async (req, res) => {
  findAllReq(req, res);
});

// Create a new request
router.post("/admin/req", async (req, res) => {
  createReq(req, res);
});

// Delete all recipes requests
router.delete("/admin/req", async (req, res) => {
  deleteAllReq(req, res);
});

module.exports = router;
