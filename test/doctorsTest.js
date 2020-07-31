const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("should");
const app = require("../index");

chai.use(chaiHttp);

describe("POST /doctors/register", () => {
  it("Registering a Doctor", (done) => {
    chai
      .request(app)
      .post("/doctors/register")
      .type("form")
      .send({
        email: "test_doctor",
        password: "test_password",
      })
      .end((err, res) => {
        console.log(res.body);
        should(res.body.user.email).be.eql("test_doctor");
        res.should.have.status = 200;
        done();
      });
  });
});
