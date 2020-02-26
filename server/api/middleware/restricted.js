module.exports = (req, res, next) => {
  console.log(`restricted: ${JSON.stringify(req.session)}`);
  // next();
  req.session && req.session.userId
    ? next()
    : res.status(401).json({ errorMessage: "session is not in session" });
};
