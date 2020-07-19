const express = require("express");
const Bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const Message = require("./models/Message")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://user:pass123@ds027175.mlab.com:27175/heroku_gj4kmprx");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactUsers");

const myserver = app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const io = require('socket.io')(myserver);

io.sockets.on('connection', (socket) => {

  console.log('connected')

  // socket.on('sport', function (sport) {
  //   if (socket.sport) {
  //     socket.leave(socket.sport)
  //   }
  //   console.log(sport)
  //   socket.sport = sport
  //   socket.join(sport)

  //   // Get the last 10 messages from the database.
  //   Message.find({ sport: sport }).sort({ createdAt: -1 }).limit(10).exec((err, messages) => {
  //     if (err) return console.error(err);

  //     // Send the last messages to the user.
  //     socket.emit('init', messages);
  //   });
  // });

  socket.on('room', function (room) {
    if (socket.room) {
      socket.leave(socket.room)
    }
    console.log(room)
    socket.room = room
    socket.join(room)

    // room = 'Raleigh'

    // Get the last 10 messages from the database.
    Message.find({ room: room }).sort({ createdAt: -1 }).limit(10).exec((err, messages) => {
      if (err) return console.error(err);

      // Send the last messages to the user.
      socket.emit('init', messages);
    });

    // io.sockets.in(room).emit('message', `you're in ${room}!`)

  });

  socket.on('message', (msg) => {
    // Create a message with the content and the name of the user.
    const message = new Message({
      content: msg.content,
      name: msg.name,
      room: msg.room,
    });
    console.log(msg)
    // Save the message to the database.
    message.save((err) => {
      if (err) return console.error(err);
    });

    // Notify all other users about a new message.
    io.sockets.in(msg.room).emit('message', msg)
  });



});







// Start the API server

