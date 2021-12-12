/* eslint-disable no-undef */
import request from "supertest";
import express from "express";

import { router } from "../../src/routes/routes";

const app = express();
const kPort = 3030;

app.use("/", router);

const server = app.listen(kPort, () => {
  console.log(`Testing Server is listening on port ${kPort}`);
});

describe("it should be a single test", () => {
  it("should be a single test", (done) => {
    request(server)
      .get("/")
      .expect(200, { message: "Hello World" }, done);
  });

  server.close();
});
