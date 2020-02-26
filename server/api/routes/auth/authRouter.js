const express = require("express");
const router = express.Router();
const db = require("../../../../database/journalModel");
const bcrypt = require("bcryptjs");
const {
  validateUserBody,
  checkExistingUsers,
  validateHeaders
} = require("../../middleware/auth/authMiddleware");

router.post("/register", validateUserBody, checkExistingUsers, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 13);
  user.password = hash;
  db.insertUser(user)
    .then(user => {
      req.session.userId = user.id;
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

//todo add more security, learn more
//todo if already logged in redirect to dashboard
router.get("/login", validateHeaders, (req, res) => {
  const { username, password } = req.headers;

  db.getUserByUsername(username)
    .then(user => {
      if (!user) {
        res.status(404).json({ errorMessage: "Username does not exist" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.userId = user.id;
          res.status(200).json(user);
        } else {
          res.status(403).json({ errorMessage: "incorrect credentials" });
        }
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve user", error: err })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Auth Route up" });
});

module.exports = router;
