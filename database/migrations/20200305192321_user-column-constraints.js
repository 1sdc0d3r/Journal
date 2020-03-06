exports.up = function(knex) {
  return knex.schema.createTable("User", tbl => {
    tbl.increments();
    tbl.dateTime("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    tbl.string("first_name").notNullable();
    tbl.string("last_name").notNullable();
    tbl.string("email", 226).notNullable();
    tbl.string("username").notNullable();
    tbl.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("User");
};
