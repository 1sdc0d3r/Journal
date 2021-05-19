exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("User")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("User").insert([{
          account_type: 'user',
          first_name: "user1",
          last_name: "test",
          email: "testing@test.com",
          username: "user1",
          password: "$2a$13$FU.Pkro6j/eBR3YmVYjYuulLyFwhm9qBqlrXw5foBPorrUatbmZ52"
        },
        {
          account_type: 'user',
          first_name: "user2",
          last_name: "test",
          email: "testing@test.com",
          username: "user2",
          password: "$2a$13$FU.Pkro6j/eBR3YmVYjYuulLyFwhm9qBqlrXw5foBPorrUatbmZ52"
        },
        {
          account_type: 'user',
          first_name: "user3",
          last_name: "test",
          email: "testing@test.com",
          username: "user3",
          password: "$2a$13$FU.Pkro6j/eBR3YmVYjYuulLyFwhm9qBqlrXw5foBPorrUatbmZ52"
        },
        {
          account_type: "admin",
          first_name: "Jack",
          last_name: "Barry",
          email: "jackBarry@test.com",
          username: "jackBarry",
          password: "$2a$13$FU.Pkro6j/eBR3YmVYjYuulLyFwhm9qBqlrXw5foBPorrUatbmZ52"
        }
      ]);
    });
};
