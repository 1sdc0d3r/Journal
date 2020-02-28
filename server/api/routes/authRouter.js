const express = require("express");
const router = express.Router();
const db = require("../../../database/journalModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET = "not a secret" } = process.env;

const {
  validateUserBody,
  checkExistingUsers,
  validateHeaders
} = require("../middleware/auth/authMiddleware");

router.post("/register", validateUserBody, checkExistingUsers, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 13);
  user.password = hash;
  db.insertUser(user)
    .then(user => {
      const token = generateToken(user);
      res.status(201).json({ user, token });
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
        res.status(403).json({
          errorMessage: "incorrect credentials"
        });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ user, token });
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

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const secret = JWT_SECRET || "not a secret";
  const options = {
    expiresIn: "1w"
  };
  return jwt.sign(payload, secret, options);
}
