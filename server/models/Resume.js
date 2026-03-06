const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  fullName: String,
  title: String,
  email: String,
  phone: String,
  location: String,
  linkedin: String,
  website: String,
  summary: String,
  experience: Array,
  education: Array,
  skills: Array
}, { timestamps: true });

module.exports = mongoose.model("Resume", ResumeSchema);