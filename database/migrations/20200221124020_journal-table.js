exports.up = function(knex) {
  return knex.schema.createTable("Journal", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("User");
    tbl
      .integer("entry_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("Entry");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Journal");
};
