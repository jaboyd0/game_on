const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;
