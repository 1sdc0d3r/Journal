require("dotenv").config();
const router = require("express").Router();

const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");

const restricted = require("./middleware/restricted");

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/logout", restricted, logoutRoute);

module.exports = router;
