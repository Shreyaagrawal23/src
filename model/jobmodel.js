const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  position: String,
  createdOn: String,
  status: String,
  salaryRange: String,
  experience: String,
  codingAssessment: String,
});

module.exports = mongoose.model('Job', jobSchema);