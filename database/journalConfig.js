const knex = require("knex");
const configOptions = require("../knexfile");
const DB_ENV = process.env.DB_ENV || development;

module.exports = knex(configOptions[DB_ENV]);
