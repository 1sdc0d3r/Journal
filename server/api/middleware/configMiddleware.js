require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const ONE_WEEK = 1 * 24 * 60 * 60 * 1000; //1week
const {
  NODE_ENV,
  COOKIE_SECRET = "N0tBf3niTiwod8",
  SESS_LIFETIME = ONE_WEEK,
  SESS_NAME = "sid"
} = process.env;
const IN_PROD = NODE_ENV === "production";

module.exports = server => {
  server.use(express.json());
  // server.use(morgan("combined"));
  server.use(helmet());
  server.use(cors());
  server.use(
    session({
      name: SESS_NAME, //sid
      secret: COOKIE_SECRET,
      cookie: {
        maxAge: 20000 || SESS_LIFETIME, //take off hard number
        sameSite: true,
        secure: IN_PROD // https only
      },
      httpOnly: true, //don't let JS code access cookies
      resave: false,
      saveUninitialized: false
    })
  );
};
