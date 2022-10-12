const mongoose = require("mongoose");

let userModel = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: [String], required: true },
  pincode: { type: Number, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userModel);

module.exports = User;
