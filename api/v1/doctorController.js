//require doctor's Db & JWT
const doctorsDb = require("../../../models/doctorsSchema");
const jwt = require("jsonwebtoken");

//to login user
module.exports.doctorsLogin = function (req, res) {
  try {
    doctorsDb.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        console.log(`Error in finding Doctor ${error}`);
        return res.status(500).json({
          status: "Internal Server Error",
        });
      }

      if (user == null) {
        return res.status(404).json({
          status: "User-name not found",
        });
      }

      if (user.password != req.body.password) {
        return res.status(401).json({
          status: "Incorrect Password",
        });
      }

      return res.status(200).json({
        data: jwt.sign(user.toJSON(), "hospital", { expiresIn: "999999" }),
      });
    });
  } catch (err) {
    console.log(`Error in loggin Doctor : ${err}`);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//to register a new doctor
module.exports.doctorRegister = (req, res, next) => {
  doctorsDb.create(req.body, (err, user) => {
    if (err) {
      console.log(`Error in adding Doctor ${err}`);
      return res.status(500).json({
        status: "Internal Server Error",
      });
    }

    return res.status(200).json({
      user,
    });
  });
};
