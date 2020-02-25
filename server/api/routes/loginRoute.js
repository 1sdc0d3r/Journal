require("dotenv").config(); // fix the .env file
const express = require("express");
const router = express.Router();
const db = require("../../../database/journalModel");
const bcrypt = require("bcryptjs");
const { validateHeaders } = require("../middleware/loginMiddleware");

//todo add more security, learn more

router.get("/", validateHeaders, async (req, res) => {
  const { username, password } = req.headers;
  const user = await db
    .getUserByUsername(username)
    .then(user => (!user ? res.status(404) : user))
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