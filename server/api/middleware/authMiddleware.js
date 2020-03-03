const db = require("../../../database/journalModel");

module.exports = {
  validateUserBody,
  checkExistingUsers,
  validateHeaders
};
function validateUserBody(req, res, next) {
  const user = req.body;
  if (!user.first_name || !user.last_name || !user.email) {
    res.status(400).json({ message: "please provide name and email" });
  } else if (!user.username || !user.password) {
    res.status(400).json({ message: "please provide username and password" });
  }
  next();
}

function checkExistingUsers(req, res, next) {
  const user = req.body;
  db.getUserByEmail(user.email).then(oldUser => {
    if (oldUser) {
      res.status(400).json({
        message: "Account with this email already exits"
      });
    } else {
      db.getUserByUsername(user.username).then(oldUser => {
        oldUser
          ? res.status(400).json({
              message: "this username is already in use"
            })
          : next();
      });
    }
  });
}

function validateHeaders(req, res, next) {
  const { username, password } = req.headers;

  !username || !password
    ? res.status(400).json({
        message: "Please provide username and password"
      })
    : next();
}
