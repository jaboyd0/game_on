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
// comparing passwords
userSchema.methods.comparePassword = function(candidatePassword, checkpassword){

  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) return checkpassword(err)
    checkpassword(null, isMatch)
  })
}

const UserData = mongoose.model("UserData", userSchema);

module.exports = UserData;
