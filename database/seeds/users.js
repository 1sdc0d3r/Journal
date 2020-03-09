exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("User")
    .delete()
    .then(function() {
      // Inserts seed entries
      return knex("User").insert([
        {
          first_name: "user1",
          last_name: "test",
          email: "testing@test.com",
          username: "user1",
          password: "password"
        },
        {
          first_name: "user2",
          last_name: "test",
          email: "testing@test.com",
          username: "user2",
          password: "password"
        },
        {
          first_name: "user3",
          last_name: "test",
          email: "testing@test.com",
          username: "user3",
          password: "password"
        },
        {
          account: "admin",
          first_name: "Jack",
          last_name: "Barry",
          email: "jackBarry@test.com",
          username: "jackBarry",
          password: "password"
        }
      ]);
    });
};
