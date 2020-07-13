const  mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: 1, trim: true },
  city: { type: String, required: true },
  password: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const bcrypt = require("bcrypt");
let SALT = 10;

//Hashing the password before saving to database
userSchema.pre("save", function(next){
  var user = this;

  if(user.isModified("password")) {
    bcrypt.genSalt(SALT, function(err,salt){
      if(err) return next(err);

      bcrypt.hash(user.password, salt, function (err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
      })
    })
  } else {
    next()
  }
});
const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;
