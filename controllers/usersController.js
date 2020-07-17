const db = require("../models");


// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.UserData
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.UserData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // checks if email is present or not for sign in page
  findOne: function (req, res) {
    db.UserData
      .findOne({"email": req.body.email} ).then( (user) => {
        if(!user) { 
          return  res.json({message: "Sorry! Incorrect Credentials"});
        }
        //IF email is present then it will compare password
        user.comparePassword(req.body.password, (err,isMatch)=>{
          // console.log(req.body);
          // console.log(isMatch);
          // console.log(user);
          if(err) throw err;
          if(!isMatch) {
            return res.status(200).json({
              message:"Sorry! Incorrect Credentials"  
          }) } else { 
                res.status(200).send("Logged in successfullyy");
               }  
        })
      })
      .catch(err => res.status(422).json(err));
  }, 
  // Created to find by city..

  findByCity: function(req, res) {
    db.UserData
      .find({ city: req.params.city })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },

  create: function(req, res) {
    db.UserData
      .create(req.body)
      .then((dbModel) => { 
        res.json(dbModel);
        
      })
      .then((res) => {
        res.redirect("/SignIn");
      })
      .catch(err => res.status(422).json(err));

  },
  update: function(req, res) {
    db.UserData
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserData
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
