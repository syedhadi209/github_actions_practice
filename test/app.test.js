import { expect } from "chai";
import supertest from "supertest";
import { app } from "../index.js";

const request = supertest(app);

describe("GET /", () => {
  it('should return "hello"', function (done) {
    this.timeout(5000); // Set a higher timeout (adjust as needed)

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
