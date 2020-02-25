exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("User")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("User").insert([
        {
          first_name: "Jack",
          last_name: "Barry",
          email: "jackBarry@email.com",
          username: "jackBarry",
          password: "password"
        },
        {
          first_name: "Fred",
          last_name: "Fitzgerald",
          email: "fredFitzgerald@email.com",
          username: "fredFitzgerald",
          password: "password"
        }
      ]);
    });
};
