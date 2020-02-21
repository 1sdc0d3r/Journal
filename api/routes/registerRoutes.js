const express = require("express");
const router = express.Router();
const db = require("../../data/journalModel");
const bcrypt = require("bcryptjs");

router.post("/", validateUser, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 13);
  user.password = hash;
  db.insertUser(user)
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
  if (!user.first_name) {
    res.status(400).json({ message: "please provide first name" });
  } else if (!user.last_name) {
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
