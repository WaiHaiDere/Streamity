const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = require("./src/db");

// Import the library:
const cors = require("cors");

app.use(express.json());
app.use(cors());

const http = require("http").createServer(app);
const io = require("socket.io")(http);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

http.listen(3001, () => {
  console.log("Listening on port3001");
});

const pinRouter = require("./src/api-routes/room");
const spotifyRouter = require("./src/api-routes/spotify");

app.use("/api/spotify", spotifyRouter);
app.use("/api/room", pinRouter);

db.connect().then(() => {
  app.listen(5002, () => {
    console.log("Listening on port 5002");
  });
});

mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("connected to database"));
