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

  describe("/POST patients/create_report", () => {
    it("Creating report for the patient", async () => {
      //creating new report with the auth token
      let patient = await chai
        .request(app)
        .post("/patients/create_report")
        .set({ Authorization: `Bearer ${token}` })
        .type("form")
        .send({
          phone: "000",
          status: "Positive",
        });
      console.log(patient.body);
      patient.should.have.status = 200;
      should(patient.body.report.status).be.eql("Positive");
    });
  });
});
