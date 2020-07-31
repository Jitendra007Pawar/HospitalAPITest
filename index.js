//set port, import express & get bodyParser
const port = 8000;
const express = require("express");

// for using DB
const db = require("./config/mongoose");

//create express appliaction
const app = express();

//importing pasport & strategy
const passport = require("passport");
const passportJWT = require("passport-jwt");

// set view engine & url encoding
app.use(express.urlencoded({ extended: true }));

//importing all the routers
const patientsRouter = require("./routes/api/v1/patientsRouter");
const doctorsRouter = require("./routes/api/v1/doctorsRouter");
const reportsRouter = require("./routes/api/v1/reportsRouter");

//sending to appropriate routes
app.use("/doctors", doctorsRouter);
app.use("/patients", patientsRouter);
app.use("/reports", reportsRouter);
app.use("/", (req, res, next) => {
  return res.status(404).json({
    status: "Kahan aa gaye bhai?",
  });
});

// adding listener
app.listen(port, (error) => {
  if (error) {
    console.log("error in listener.");
    return;
  }

  console.log(`The Server is live at port : ${port}`);
});
