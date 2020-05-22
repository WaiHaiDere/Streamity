const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = require("./src/db");

const Room = require("./src/db/models/roomSchema");


// Import the library:
const cors = require("cors");

app.use(express.json());
app.use(cors());

const http = require("http").createServer(app);
const io = require("socket.io")(http);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

const pinRouter = require("./src/api-routes/room");
const spotifyRouter = require("./src/api-routes/spotify");

app.use("/api/spotify", spotifyRouter);
app.use("/api/room", pinRouter);

db.connect().then(() => {
  app.listen(5002, () => {
    console.log("Listening on port 5002");
  });
});


http.listen(3001, () => {
  console.log("Listening on port 3001");
});

io.on("connection", (socket) => {
  socket.on("join room", async (user, pin) => {
    socket.join(pin);

    const foundRoom = await Room.findOne({pin});
    const message = {
      user: user,
      message: `${user} has joined room ${pin}`,
    }
    foundRoom.chat.push(message);
    await foundRoom.save();

    socket.broadcast.to(pin).emit("chat message", {
      chatList: foundRoom.chat,
    });
  });

  socket.on("disconnect", async (user, pin) => {
    socket.broadcast.to(pin).emit("leave room", user, pin);
    socket.leave(pin);
  });

  socket.on("chat message", async (msg, pin) => {
    const foundRoom = await Room.findOne({pin});
    const message = {
      user: msg.user,
      message: msg.message,
    }
    foundRoom.chat.push(message);
    await foundRoom.save();
    socket.broadcast.to(pin).emit("chat message", {
      chatList: foundRoom.chat,
    });
  });
});
mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("connected to database"));

