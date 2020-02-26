const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Successfully logged out" });
});

module.exports = router;

//* SESSION
// const { SESS_NAME } = process.env;
// req.session.destroy(err => {
//   err
//     ? res.status(500).json({ errorMessage: "unable to logout", error: err })
//     : res
//         .status(200)
//         .clearCookie(SESS_NAME)
//         .json({ message: "successfully logged out" });
// });
