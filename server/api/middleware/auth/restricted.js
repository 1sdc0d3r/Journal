const jwt = require("jsonwebtoken");
const { JWT_SECRET = "not a secret" } = process.env;

//don't send token at string
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log("auth header", authorization);
  if (authorization) {
    jwt.verify(authorization, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ errorMessage: "Invalid Credentials" });
      } else {
        req.decodedToken = decodedToken;
        console.log("decoded token", req.decodedToken);
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
