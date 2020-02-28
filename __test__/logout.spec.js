const request = require("supertest");
const server = require("../server/server");

describe("Logout Route", () => {
  it("should return status 200", async () => {
    const expectedStatusCode = 200;
    const response = await request(server).get("/api/logout");

    expect(response.status).toEqual(expectedStatusCode);
  });
});
