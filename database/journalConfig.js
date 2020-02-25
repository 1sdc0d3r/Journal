require("dotenv").config();
const { NODE_ENV = "development" } = process.env;

const knex = require("knex");
const configOptions = require("../knexfile");

module.exports = knex(configOptions.development);
// module.exports = knex(configOptions[NODE_ENV]);
