require("dotenv").config();
const express = require("express");
const server = express();
const PORT = process.env.PORT || 5001;

const configureMiddleware = require("./api/middleware/configMiddleware");
configureMiddleware(server);

const protected = require("./api/middleware/protected");

const registerRoute = require("./api/routes/registerRoute");
const loginRoute = require("./api/routes/loginRoute");
const logoutRoute = require("./api/routes/logoutRoute");

//todo change requests to req.headers vs req.body
//todo add "restricted" middleware for routes sessions
server.use("/register", registerRoute);
server.use("/login", loginRoute);
server.use("/logout", protected, logoutRoute);

server.listen(PORT, () => {
  console.log(`http://localhost:5000`);
});
