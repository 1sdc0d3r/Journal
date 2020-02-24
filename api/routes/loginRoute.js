require("dotenv").config(); // fix the .env file
const express = require("express");
const router = express.Router();
const db = require("../../data/journalModel");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const parser = require("body-parser");
//todo add more security, learn more
ONE_WEEK = 1 * 24 * 60 * 60 * 1000; //1week
const {
  NODE_ENV,
  COOKIE_SECRET = "N0tBf3niTiwod8",
  SESS_LIFETIME = ONE_WEEK,
  SESS_NAME = "sid"
} = process.env;
const IN_PROD = NODE_ENV === "production";

router.use(
  session({
    name: SESS_NAME,
    secret: COOKIE_SECRET,
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: IN_PROD
    },
    httpOnly: true, //don't let JS code access cookies
    resave: false,
    saveUninitialized: false
  })
);

router.post("/", async (req, res) => {
  const { username, password } = req.headers;
  // console.log(req.body);
  // console.log(req.headers);
  if ((username, password)) {
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
    console.log("user", user);
    return user;
  } else {
    res.status(400).json({
      message: "Please provide username and password"
    });
  }
  if (bcrypt.compareSync(password, user.password)) {
    // req.session.userId = user.id;
    console.log(req.session);
    res
      .status(200)
      .json({ message: `Welcome ${user.first_name} ${user.last_name}` });
  } else {
    res.status(403).json({ message: "incorrect credentials" });
  }
});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Login Route" });
});

module.exports = router;

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

function redirectLogin(req, res, next) {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
}
