const express = require("express");
const router = express.Router();
const db = require("../../data/journalModel");

router.post("/", validateUser, (req, res) => {
  const user = req.body;
  db.insertEntry(user)
    .then(user => res.status(201).json(user))
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to create user", error: err })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Register Route" });
});

module.exports = router;

function validateUser(req, res, next) {
  const user = req.body;
  if (!user.firstName) {
    res.status(400).json({ message: "please provide first name" });
  } else if (!user.firstName) {
    res.status(400).json({ message: "please provide first name" });
  } else if (!user.lastName) {
    res.status(400).json({ message: "please provide last name" });
  } else if (!user.email) {
    res.status(400).json({ message: "please provide email" });
  } else if (!user.username) {
    res.status(400).json({ message: "please provide username" });
  } else if (!user.password) {
    res.status(400).json({ message: "please provide password" });
  }
  next();
}
