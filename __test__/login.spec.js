const request = require("supertest");
const server = require("../server/server");
const db = require("../database/journalConfig");

const users = {
  init: {
    first_name: "Jack",
    last_name: "Barry",
    email: "test@email.com",
    username: "jackBarry",
    password: "password"
  }
};

beforeEach(async () => {
  await db("User").truncate();
  await request(server)
    .post("/api/register")
    .send(users.init);
});

describe("Login Route", () => {
  describe("Successful Login", () => {
    it("should return status code 200", async () => {
      const expectedStatusCode = 200;
      //   const response = await request(server).post("/api/login");
      //   console.log(response.status);
      //   console.log(response.body);
    });
  });
});
