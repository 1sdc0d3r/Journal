const router = require("express").Router();
const userDb = require("../../../database/model/userModel");

router.get("/delete", (req, res) => {
  const id = req.decodedToken.subject;

  userDb
    .removeUser(id)
    .then((res) => res.status(200).json({ message: "deleted user :(" }))
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({ name, message, stack, code })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ message: "user route up" });
});

module.exports = router;
