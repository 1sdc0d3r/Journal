const express = require("express");
const router = express.Router();
const db = require("../../data/journalModel");

router.get("/", (req, res) => {});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Login Route" });
});

module.exports = router;
