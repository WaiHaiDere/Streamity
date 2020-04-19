const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = require("./src/db");


const pinRouter = require("./src/api-routes/pin");

// app.get("/", (req,res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   console.log("recieved");
//   res.json({test: "Hello World!"});
// });

app.use("/api/pin", pinRouter);

db.connect().then(() => {
  app.listen(5002, () => {
    console.log("Listening on port 5002")
  });
})

mongoose.connection.on('error', error => console.error(error));
mongoose.connection.once('open', () => console.log('connected to database'));


