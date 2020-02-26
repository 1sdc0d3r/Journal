require("dotenv").config();
const express = require("express");
const router = express.Router();
const { SESS_NAME } = process.env;

router.get("/", (req, res) => {
  console.log(`logoutRoute: ${JSON.stringify(req.session)}`);
  req.session.destroy(err => {
    err
      ? res.status(500).json({ errorMessage: "unable to logout", error: err })
      : res
          .status(200)
          .clearCookie(SESS_NAME)
          .json({ message: "successfully logged out" });
  });
});

module.exports = router;
