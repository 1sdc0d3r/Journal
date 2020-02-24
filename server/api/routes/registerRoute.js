const express = require("express");
const router = express.Router();
const db = require("../../../data/journalModel");
const bcrypt = require("bcryptjs");
const {
  validateUserBody,
  checkExistingUsers
} = require("../middleware/registerMiddleware");

router.post("/", validateUserBody, checkExistingUsers, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 13);
  user.password = hash;
  db.insertUser(user)
    .then(user => {
      //todo add in req.session.userId
      res.status(201).json(user);
    })
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
