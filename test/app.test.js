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
        if (err) {
          done(err);
          process.exit(1); // Exit with an error code
        }

        expect(res.body).to.deep.equal({ msg: "hello" });
        done();
        process.exit(0); // Exit with a success code
      });
  });
});
