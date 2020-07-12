const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: 1, trim: true },
  city: { type: String, required: true },
  password: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;
