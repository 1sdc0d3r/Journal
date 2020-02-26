module.exports = {
  validateHeaders
};

function validateHeaders(req, res, next) {
  const { username, password } = req.headers;

  !username || !password
    ? res.status(400).json({
        message: "Please provide username and password"
      })
    : next();
}
