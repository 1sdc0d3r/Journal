require("dotenv").config();
const router = require("express").Router();

//* ROUTES
const authRouter = require("./routes/auth/authRouter");
const loginRoute = require("./routes/user/loginRoute");
const logoutRoute = require("./routes/user/logoutRoute");

//* MIDDLEWARE
const restricted = require("./middleware/restricted");

router.use("/auth", authRouter);
router.use("/login", loginRoute);
router.use("/logout", restricted, logoutRoute);

router.use("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
