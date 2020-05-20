const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = require("./src/db");

// Import the library:
const cors = require("cors");

app.use(express.json());
app.use(cors());

const pinRouter = require("./src/api-routes/room");
const spotifyRouter = require("./src/api-routes/spotify");

app.use("/api/spotify", spotifyRouter);
app.use("/api/room", pinRouter);

const port = process.env.PORT || 5002;
db.connect().then(() => {
  app.listen(port, () => {
    console.log("Listening on port 5002");
  });
});

mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.once("open", () => console.log("connected to database"));
