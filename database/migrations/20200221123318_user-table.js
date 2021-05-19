exports.up = function (knex) {
  return knex.schema.createTable("User", (tbl) => {
    tbl.increments("id").primary();
    tbl.timestamps(true, true);
    // tbl.dateTime("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    // tbl.dateTime("updated_at");
    tbl
      .string("account_type") //change to account_type
      .defaultTo("user")
      .notNullable();
    tbl.string("first_name").notNullable();
    tbl.string("last_name").notNullable();
    tbl.string("email").notNullable();
    tbl.string("username").notNullable();
    tbl.string("password").notNullable();
    tbl.string("fields").defaultTo([]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("User");
};
