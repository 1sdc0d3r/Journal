exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Journal")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Journal").insert([
        { user_id: 1, entry_id: 1 },
        { user_id: 1, entry_id: 2 },
        { user_id: 1, entry_id: 3 },
        { user_id: 2, entry_id: 4 },
        { user_id: 2, entry_id: 5 },
        { user_id: 2, entry_id: 6 }
      ]);
    });
};
