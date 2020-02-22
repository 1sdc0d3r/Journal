require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5001;

const morgan = require("morgan");
const helmet = require("helmet");

const registerRoute = require("./api/routes/registerRoute");
const loginRoute = require("./api/routes/loginRoute");
const logoutRoute = require("./api/routes/logoutRoute");

const server = express();

server.use(express.json());
server.use(morgan("combined"));
server.use(helmet());

server.use("/register", registerRoute);
server.use("/login", loginRoute);
server.use("/logout", logoutRoute);

server.listen(PORT, () => {
  console.log(`http://localhost:5000`);
});
