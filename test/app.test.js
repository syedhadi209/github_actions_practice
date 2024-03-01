import { expect } from "chai";
import supertest from "supertest";
import { app } from "../index.js";

const request = supertest(app);

describe("GET /", () => {
  it('should return "hello"', (done) => {
    request
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.deep.equal({ msg: "hello" });
        done();
      });
  });
});
