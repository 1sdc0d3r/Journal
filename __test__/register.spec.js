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
  },
  new: {
    first_name: "Fred",
    last_name: "Fitzgerald",
    email: "testing@email.com",
    username: "fredFitz",
    password: "password"
  },
  sameEmail: {
    first_name: "Jack",
    last_name: "Barry",
    email: "test@email.com",
    username: "jackBarryTest",
    password: "password"
  },
  sameUser: {
    first_name: "Jack",
    last_name: "Barry",
    email: "jackBarry@email.com",
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

describe("register route", () => {
  it("should return status code 200", async () => {
    const expectedStatusCode = 200;
    const response = await request(server).get("/api/register");
    expect(response.status).toEqual(expectedStatusCode);
  });

  it("should return a JSON format", async () => {
    const response = await request(server).get("/api/register");
    expect(response.type).toEqual("application/json");
  });

  it("should return expected response", async () => {
    const expectedBody = { Route: "Register Route up" };
    const response = await request(server).get("/api/register");
    expect(response.body).toEqual(expectedBody);
  });

  describe("successful register", () => {
    it("should create a new user w/ code 201", async () => {
      const expectedBody = 2;
      const response = await request(server)
        .post("/api/register")
        .send(users.new);
      expect(response.body).toEqual(expectedBody);
    });

    it("should return status code 201", async () => {
      const expectedStatusCode = 201;
      const response = await request(server)
        .post("/api/register")
        .send(users.new);
      expect(response.status).toEqual(expectedStatusCode);
    });
  });

  describe("unsuccessful register", () => {
    it("should return code 400", async () => {
      const expectedStatusCode = 400;

      const response = await request(server)
        .post("/api/register")
        .send(users.sameEmail);
      expect(expectedStatusCode).toEqual(response.status);
    });

    it("should return same-email error", async () => {
      const expectedBody = {
        message: "Account with this email already exits"
      };
      const response = await request(server)
        .post("/api/register")
        .send(users.sameEmail);
      expect(response.body).toEqual(expectedBody);
    });

    it("should return same-user error", async () => {
      const expectedBody = { message: "this username is already in use" };
      const response = await request(server)
        .post("/api/register")
        .send(users.sameUser);
      expect(response.body).toEqual(expectedBody);
    });
  });
});
