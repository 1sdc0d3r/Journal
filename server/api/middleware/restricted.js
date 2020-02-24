module.exports = (req, res, next) =>
  req.session && req.session.userId
    ? next()
    : res.status(401).json({ errorMessage: "session is not in session" });
