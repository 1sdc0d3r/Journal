const userDb = require("../../../database/model/userModel");

module.exports = {
  validateUserBody,
  checkExistingUsers,
  validateHeaders,
};
function validateUserBody(req, res, next) {
  const user = req.body;
  if (!user.first_name || !user.email) {
    res.status(400).json({ message: "please provide name and email" }).end();
  } else if (!user.username || !user.password) {
    res
      .status(400)
      .json({ message: "please provide username and password" })
      .end();
  }
  next();
}

function checkExistingUsers(req, res, next) {
  const user = req.body;
  userDb.getUserByEmail(user.email).then((oldUser) => {
    if (oldUser) {
      res.status(400).json({
        errorMessage: "Account with this email already exits",
      });
    } else {
      userDb.getUserByUsername(user.username).then((oldUser) => {
        oldUser
          ? res.status(400).json({
              errorMessage: "this username is already in use",
            })
          : next();
      });
    }
  });
}

function validateHeaders(req, res, next) {
  const { username, password } = req.body;

  !username || !password
    ? res.status(400).json({
        message: "Please provide username and password",
      })
    : next();
}
