const router = require("express").Router();

//* ROUTES
const authRouter = require("./routes/authRouter");
const entryRouter = require("./routes/entryRouter");

//* MIDDLEWARE
const restricted = require("./middleware/restricted");

// .catch({name, message, stack, code})

router.use("/auth", authRouter);
router.use("/entry", restricted, entryRouter);

router.use("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
