const express = require("express");
const router = express.Router();
const db = require("../../data/journalModel");
const bcrypt = require("bcryptjs");
//todo validate that user is not already created.
router.post("/", validateUserBody, checkExistingUsers, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 13);
  user.password = hash;
  db.insertUser(user)
    .then(user => res.status(201).json(user))
    .catch((
      err //{name, message, stack} = .catch
    ) =>
      res
        .status(500)
        .json({ errorMessage: "unable to create user", error: err })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Register Route" });
});

module.exports = router;
//todo validate user email or username isn't already in database User table

function checkExistingUsers(req, res, next) {
  const user = req.body;
  db.getUserByEmail(user.email).then(oldUser => {
    if (oldUser) {
      res.status(400).json({
        message: "Account with this email already exits"
      });
    } else {
      db.getUserByUsername(user.username).then(oldUser => {
        oldUser
          ? res.status(400).json({
              message: "this username is already in use"
            })
          : next();
      });
    }
  });
}

function validateUserBody(req, res, next) {
  const user = req.body;
  if (!user.first_name || !user.last_name || !user.email) {
    res.status(400).json({ message: "please provide name and email" });
  } else if (!user.username || !user.password) {
    res.status(400).json({ message: "please provide username and password" });
  }
  next();
}
