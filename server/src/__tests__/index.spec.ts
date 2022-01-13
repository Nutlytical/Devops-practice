const request = require("supertest");

import { app } from "../index";

describe("GET /api/user", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/api/user/").expect(200);

    expect(response.status).toEqual(200);
  });

  it("should respond with selected gender", async () => {
    const genders = ["male", "female"];

    for (let gender of genders) {
      const response = await request(app).get(`/api/user/${gender}`);
      let data = response.body;

      expect(response.status).toEqual(200);

      for (let index in data) {
        expect(response.body[index].gender).toEqual(gender);
      }
    }
  });
});
