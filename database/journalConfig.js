const knex = require("knex");
const configOptions = require("../knexfile");
const NODE_ENV = process.env.NODE_ENV || development;

module.exports = knex(configOptions[NODE_ENV]);
