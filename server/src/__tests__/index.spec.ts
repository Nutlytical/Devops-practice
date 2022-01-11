const request = require("supertest");

import { app } from "../index";

describe("GET /api", () => {
  test("It should respond with status 200", async () => {
    const response = await request(app).get("/api");

    expect(response.body).toEqual({ status: "200" });
    expect(response.statusCode).toBe(200);
  });
});
