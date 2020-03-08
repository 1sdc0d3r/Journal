exports.up = function(knex) {
  return knex.schema.alterTable("Entry", tbl => {
    tbl
      .boolean("favorite")
      .defaultTo(false)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("Entry", tbl => {
    tbl.dropColumn("favorite");
  });
};
