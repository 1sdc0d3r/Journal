require("dotenv").config();
const router = require("express").Router();

//* ROUTES
const registerRoute = require("./routes/user/registerRoute");
const loginRoute = require("./routes/user/loginRoute");
const logoutRoute = require("./routes/user/logoutRoute");

//* MIDDLEWARE
const restricted = require("./middleware/restricted");

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/logout", restricted, logoutRoute);

router.use("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
