const chai = require("chai");
const chaiHttp = require("chai-http");
const should = require("should");
const app = require("../index");

chai.use(chaiHttp);
let token;

describe("/POST patients/create_report", () => {
  //getting the authorization token before api calls
  beforeEach(async () => {
    let res = await chai.request(app).post("/doctors/login").type("form").send({
      email: "test_doctor",
      password: "test_password",
    });

    console.log(res.body);
    token = res.body.data;
  });

  describe("/POST reports/", () => {
    it("Creating report for the patient", async () => {
      //creating new report with the auth token
      let report = await chai
        .request(app)
        .post("/reports/all_reports")
        .set({ Authorization: `Bearer ${token}` })
        .type("form")
        .send({
          status: "dead",
        });
      console.log(report.body);
      report.should.have.status = 200;
      for (let i = 0; i < report.body.reports.length; i++) {
        should(report.body.reports[0].status).be.eql("dead");
      }
    });
  });
});
