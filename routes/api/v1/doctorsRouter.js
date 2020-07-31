//require Express and Router
const express = require("express");
const doctorsRouter = express.Router();

// importing relevant controller
const controller = require("../../../controllers/api/v1/doctorController");

// sending to relevant controller
doctorsRouter.post("/register", (req, res, next) => {
  return controller.doctorRegister(req, res, next);
});

doctorsRouter.use("/login", (req, res, next) => {
  return controller.doctorsLogin(req, res, next);
});

//exporting router to index
module.exports = doctorsRouter;
