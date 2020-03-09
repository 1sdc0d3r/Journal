exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Entry")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("Entry").insert([
        {
          entry1: "adderall xr",
          entry2: "20mg",
          description: "entry 1"
        },
        {
          entry1: "adderall xr",
          entry2: "20mg",
          description: "entry 2"
        },
        {
          entry1: "adderall xr",
          entry2: "20mg",
          description: "entry 3"
        },
        {
          entry1: "adderall",
          entry2: "10mg",
          description: "entry 1"
        },
        {
          entry1: "adderall",
          entry2: "10mg",
          description: "entry 2"
        },
        {
          entry1: "adderall",
          entry2: "10mg",
          description: "entry 3"
        }
      ]);
    });
};
