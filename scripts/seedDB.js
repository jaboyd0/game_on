const mongoose = require("mongoose");
const db = require("../models");

// This file empties the userData collection and inserts the users below
// this creates initial database

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactUsers"
);

const users = [
  {
    name: "Salman",
    email: "salman@gmail.com",
    city: "Tyson Corner",
    password: "1234",
    date: new Date(Date.now())
  },
  {
    name: "Haegen",
    email: "heagen@gmail.com",
    password: "1234",
    city: "Falls Church",
    date: new Date(Date.now())
  },
  {
    name: "Josh",
    email: "josh@gmail.com",
    city: "Arlington",
    password: "1234",
    date: new Date(Date.now())
  },
  {
    name: "Ayuka",
    email: "ayuka@gmail.com",
    city: "Fairfax",
    password: "1234",
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
