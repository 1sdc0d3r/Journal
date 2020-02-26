const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

module.exports = server => {
  server.use(express.json());
  server.use(morgan("dev"));
  server.use(helmet());
  server.use(cors());
};

//* SESSION
// const session = require("express-session");
// const KnexStore = require("connect-session-knex")(session);
// const knex = require("../../../database/journalConfig");
// const ONE_WEEK = 1 * 24 * 60 * 60 * 1000; //1week
// const {
//   NODE_ENV,
//   COOKIE_SECRET = "N0tBf3niTiwod8",
//   SESS_LIFETIME = ONE_WEEK,
//   SESS_NAME = "sid"
// } = process.env;
// const IN_PROD = NODE_ENV === "production";

//  server.use(
//    session({
//      name: SESS_NAME, //sid
//      secret: COOKIE_SECRET,
//      cookie: {
//        maxAge: 86400000 || SESS_LIFETIME, //todo take off hard number
//        sameSite: true,
//        secure: IN_PROD // https only
//      },
//      httpOnly: true, //don't let JS code access cookies
//      resave: false,
//      saveUninitialized: false,
//      store: new KnexStore({
//        knex,
//        tableName: "sessions",
//        createTable: true,
//        sidFieldName: "sid",
//        clearInterval: 1000 * 60 * 60 * 24 * 1
//      })
//    })
//  );
