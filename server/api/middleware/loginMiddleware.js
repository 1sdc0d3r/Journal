module.exports = {
  validateHeaders
};

function validateHeaders(req, res, next) {
  !req.headers.username || !req.headers.password
    ? res.status(400).json({
        message: "Please provide username and password"
      })
    : next();
}
