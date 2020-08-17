const router = require("express").Router();

//* ROUTES
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const entryRouter = require("./routes/entryRouter");
const journalRouter = require("./routes/journalRouter");

//* MIDDLEWARE
const restricted = require("./middleware/restricted");

// .catch({name, message, stack, code})

router.use("/auth", authRouter);
router.use("/user", restricted, userRouter);
router.use("/entry", restricted, entryRouter);
router.use("/journal", restricted, journalRouter);

router.use("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
