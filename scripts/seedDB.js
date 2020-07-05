const mongoose = require("mongoose");
const db = require("../models");

// This file empties the userData collection and inserts the users below
// this creates initial database

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const users = [
  {
    name: "Salman",
    email: "salman@gmail.com",
    city: "Woodbridge",
    date: new Date(Date.now())
  },
  {
    name: "Haegen",
    email: "heagen@gmail.com",
    city: "Tyson",
    date: new Date(Date.now())
  },
  {
    name: "Josh",
    email: "josh@gmail.com",
    city: "Reston",
    date: new Date(Date.now())
  },
  {
    name: "Ayuka",
    email: "ayuka@gmail.com",
    city: "Fairfax",
    date: new Date(Date.now())
  },
  
];

db.UserData
  .remove({})
  .then(() => db.UserData.collection.insertMany(users))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
