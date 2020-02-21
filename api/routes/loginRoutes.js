const express = require("express");
const router = express.Router();
const db = require("../../data/journalModel");
const bcrypt = require("bcryptjs");

//todo add JWT security

router.post("/", async (req, res) => {
  const { username, password } = req.body;
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

  !bcrypt.compareSync(password, user.password)
    ? res.status(403).json({ message: "incorrect credentials" })
    : res.status(200).json(user);
});

router.use("/", (req, res) => {
  res.status(200).json({ Route: "Login Route" });
});

module.exports = router;

// function authPass(password, userPassword) {
//   if (!bcrypt.compareSync(password, userPassword)) {
//     res.status(403).json({ message: "wrong password" });
//   }
// }
