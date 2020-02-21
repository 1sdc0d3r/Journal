require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5001;

const morgan = require("morgan");
const helmet = require("helmet");

const registerRoutes = require("./api/routes/registerRoutes");
const loginRoutes = require("./api/routes/loginRoutes");

const server = express();

server.use(express.json());
server.use(morgan("combined"));
server.use(helmet());

server.use("/register", registerRoutes);
server.use("/login", loginRoutes);

server.listen(PORT, () => {
  console.log(`http://localhost:5000`);
});
