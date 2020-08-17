exports.up = function (knex) {
  return knex.schema.createTable("Journal", (tbl) => {
    tbl.increments("id").primary();
    tbl
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("User")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("entry_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("Entry");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Journal");
};

// update or delete on table "User" violates foreign key constraint "journal_user_id_foreign" on table "Journal""
