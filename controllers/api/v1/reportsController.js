//require Report's DB & Doctor's DB
const reportsDb = require("../../../models/reportsSchema");

module.exports.reportsStatus = (req, res, next) => {
  const status = req.body.status;
  reportsDb.find({ status: status }, (err, reports) => {
    return res.status(200).json({ reports });
  });
};
