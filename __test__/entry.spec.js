const request = require("supertest");
const server = require("../server/server");
const db = require("../database/journalConfig");

const entry = {
  init: {
    medication: "initial",
    dose: "initial",
    description: "initial entry"
  },
  entry: {
    medication: "test",
    dose: "test",
    description: "test entry"
  },
  invalidEntry: {
    medication: "test",
    dose: "test",
    description: null
  },
  modifiedEntry: {
    medication: "new",
    dose: "new",
    description: "new"
  }
};

describe("Entry Route", () => {
  beforeEach(async () => {
    await db("Entry").truncate();
    await request(server)
      .post("/api/entry")
      .send(entry.init);
  });
  describe("GET /", () => {
    it("should return status 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/api/entry");

      expect(response.status).toEqual(expectedStatusCode);
    });
    it("should return an arry", async () => {
      const response = await request(server).get("/api/entry");
      expect(Array.isArray(response.body));
    });
  });

  describe("GET /:id", () => {
    it("should return status 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/api/entry/1");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON format", async () => {
      const response = await request(server).get("/api/entry/1");
      expect(response.type).toMatch(/json/);
    });

    it("should return the post w/ id", async () => {
      const expectedBodyId = 1;
      const response = await request(server).get("/api/entry/1");
      expect(response.body.id).toEqual(expectedBodyId);
    });
  });

  describe("POST /", () => {
    it("should return status 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server)
        .post("/api/entry")
        .send(entry.entry);
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON format", async () => {
      const response = await request(server)
        .post("/api/entry")
        .send(entry.entry);
      expect(response.type).toMatch(/json/);
    });
    it("should return a 400 on invalid entry", async () => {
      const expectedStatusCode = 400;
      const response = await request(server)
        .post("/api/entry")
        .send(entry.invalidEntry);
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return errorMessage on invalid entry", async () => {
      const expectedBody = { errorMessage: "please provide description" };
      const response = await request(server)
        .post("/api/entry")
        .send(entry.invalidEntry);
      expect(expectedBody).toEqual(response.body);
    });
  });

  describe("PUT /:id", () => {
    it("should return status 201", async () => {
      const expectedStatusCode = 201;
      const response = await request(server)
        .put("/api/entry/1")
        .send(entry.modifiedEntry);
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return JSON format", async () => {
      const response = await request(server)
        .put("/api/entry/1")
        .send(entry.modifiedEntry);
      expect(response.type).toMatch(/json/);
    });

    it("should return the new entry", async () => {
      const response = await request(server)
        .put("/api/entry/1")
        .send(entry.modifiedEntry);
      const expectedBody = {
        ...response.body,
        ...entry.modifiedEntry
      };
      expect(response.body).toEqual(expectedBody);
    });

    it("should return errorMessage on invalid entry", async () => {
      const expectedBody = { errorMessage: "please provide description" };
      const response = await request(server)
        .put("/api/entry/1")
        .send(entry.invalidEntry);
      expect(expectedBody).toEqual(response.body);
    });
  });

  describe("DELETE /:id", () => {
    it("should return status 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).delete("/api/entry/1");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return record count deleted", async () => {
      const expectedBody = 1;
      const response = await request(server).delete("/api/entry/1");
      expect(response.body).toEqual(expectedBody);
    });
  });
});
