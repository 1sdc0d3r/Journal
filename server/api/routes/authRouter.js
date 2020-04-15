const express = require("express");
const router = express.Router();
const userDb = require("../../../database/model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET = "not a secret" } = process.env;

const {
  validateUserBody,
  checkExistingUsers,
  validateHeaders,
} = require("../middleware/authMiddleware");

router.post("/register", validateUserBody, checkExistingUsers, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 13);
  user.password = hash;
  userDb
    .insertUser(user)
    .then(() => {
      const token = generateToken(user);
      res.status(201).json({ user, token });
    })
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({ name, message, stack, code })
    );
});

//todo if already logged in redirect to dashboard
router.post("/login", validateHeaders, (req, res) => {
  const { username, password } = req.body;
  userDb
    .getUserByUsername(username)
    .then((user) => {
      if (!user) {
        res.status(403).json({
          errorMessage: "incorrect username",
        });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ user, token });
        } else {
          res.status(403).json({ errorMessage: "invalid credentials" });
        }
      }
    })
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({
        errorMessage: "unable to retrieve user",
        error: { name, message, stack, code },
      })
    );
});
router.get("/users", (req, res) => {
  userDb
    .getUsers()
    .then((users) => res.status(200).json(users))
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({ name, message, stack, code })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Auth Route up" });
});

module.exports = router;

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const secret = JWT_SECRET || "not a secret";
  const options = {
    expiresIn: "1w",
  };
  return jwt.sign(payload, secret, options);
}
