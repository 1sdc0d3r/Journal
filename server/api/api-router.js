require("dotenv").config();
const router = require("express").Router();

//* ROUTES
const authRouter = require("./routes/auth/authRouter");
const logoutRoute = require("./routes/logoutRoute");

//* MIDDLEWARE
const restricted = require("./middleware/auth/restricted");

router.use("/auth", authRouter);
router.use("/logout", restricted, logoutRoute);

router.use("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
