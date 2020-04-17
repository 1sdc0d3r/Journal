const router = require("express").Router();
const userDb = require("../../../database/model/userModel");

// todo change to router.delete

router.delete("/", (req, res) => {
  const id = req.decodedToken.subject;
  console.log({ id });
  userDb
    .removeUser(id)
    .then((resp) =>
      res
        .status(200)
        .json({ message: `User was successfully deleted. ID:${resp}` })
    )
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({ name, message, stack, code })
    );
});

router.use("/", (req, res) => {
  res.status(200).json({ message: "user route up" });
});

module.exports = router;
