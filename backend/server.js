const express = require("express");

const app = express();


const pinRouter = require("./src/api-routes/pin");

// app.get("/", (req,res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   console.log("recieved");
//   res.json({test: "Hello World!"});
// });

app.use("/api/pin", pinRouter);

app.listen(8000, () => {
  console.log("Listening on port 8000")
});
