const { DB_ENV = "development" } = process.env;

const knex = require("knex");
const configOptions = require("../knexfile");

module.exports = knex(configOptions.development);
// module.exports = knex(configOptions[DB_ENV]);
