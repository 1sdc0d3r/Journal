exports.up = function(knex) {
  return knex.schema.alterTable("User", tbl => {
    tbl
      .string("account")
      .defaultTo("user")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("User", tbl => {
    tbl.dropColumn("account");
  });
};
