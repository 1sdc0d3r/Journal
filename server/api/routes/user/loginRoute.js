require("dotenv").config(); // fix the .env file
const express = require("express");
const router = express.Router();
const db = require("../../../../database/journalModel");
const bcrypt = require("bcryptjs");
const { validateHeaders } = require("../../middleware/user/loginMiddleware");

//todo add more security, learn more
//todo if already logged in redirect to dashboard
router.get("/", validateHeaders, (req, res) => {
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
  res.status(200).json({ Route: "Login Route up" });
});

module.exports = router;

// function redirectLogin(req, res, next) {
//   !req.session.userId ? res.redirect("/login") : next();
// }

// function redirectHome(req, res, next) {}

// function generateToken(user) {
//   const secret = process.env.JWT_SECRET;
//   const payload = {
//     subject: user.id,
//     username: user.username,
//     password: user.password,
//     iat: Date.now()
//   };
//   const options = {
//     expiresIn: "1w"
//   };
//   return jwt.sign(payload, secret, options);
// }
