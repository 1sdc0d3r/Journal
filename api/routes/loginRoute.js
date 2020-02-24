require("dotenv").config(); // fix the .env file
const express = require("express");
const router = express.Router();
const db = require("../../data/journalModel");
const bcrypt = require("bcryptjs");

//todo add more security, learn more



router.get("/", validateHeaders, async (req, res) => {
  const { username, password } = req.headers;
  const user = await db
    .getUserByUsername(username)
    .then(user => {
      if (!user) {
        res.status(404);
      }
      return user;
    })
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve user", error: err })
    );

  if (bcrypt.compareSync(password, user.password)) {
    req.session.userId = user.id;
    res
      .status(200)
      .json({ message: `Welcome ${user.first_name} ${user.last_name}` });
  } else {
    res.status(403).json({ message: "incorrect credentials" });
  }
  // console.log(req.session.userId);
});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Login Route" });
});

module.exports = router;

function validateHeaders(req, res, next) {
  !req.headers.username || !req.headers.password
    ? res.status(400).json({
        message: "Please provide username and password"
      })
    : next();
}

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
