const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("recieved");
  res.json({test: "Hello World!"});
})


module.exports = router;