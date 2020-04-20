const userDb = require("../../../database/model/userModel");

module.exports = {
  validateUserBody,
  checkExistingUsers,
  validateHeaders,
};
function validateUserBody(req, res, next) {
  const user = req.body;
  if (!user.first_name || !user.last_name || !user.email) {
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
    oldUser
      ? res.status(400).json({
          message: "Account with this email already exits",
        })
      : userDb.getUserByUsername(user.username).then((oldUser) => {
          oldUser
            ? res.status(400).json({
                message: "Username is already in use",
              })
            : next();
        });
  });
}

function validateHeaders(req, res, next) {
  const { username, password } = req.body;

  !username
    ? res.status(400).json({
        errorMessage: "Please provide username",
      })
    : !password
    ? res.status(400).json({
        errorMessage: "Please provide password",
      })
    : next();
}
