exports.up = function(knex) {
  return knex.schema.createTable("Entry", tbl => {
    tbl.increments("id");
    tbl.dateTime("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    tbl.dateTime("updated_at");
    tbl.string("medication");
    tbl.string("dose");
    tbl.string("description").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Entry");
};
