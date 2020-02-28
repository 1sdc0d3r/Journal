const router = require("express").Router();

//* ROUTES
const authRouter = require("./routes/authRouter");
const logoutRouter = require("./routes/logoutRouter");
const entryRouter = require("./routes/entryRouter");

//* MIDDLEWARE
const restricted = require("./middleware/auth/restricted");

// .catch({name, message, stack, code})

router.use("/auth", authRouter);
router.use("/logout", logoutRouter);
router.use("/entry", restricted, entryRouter);

router.use("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
