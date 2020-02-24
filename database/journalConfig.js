require("dotenv").config();
const env = process.env.NODE_ENV || "development";

const knex = require("knex");
const configOptions = require("../knexfile");

module.exports = knex(configOptions[env]);
