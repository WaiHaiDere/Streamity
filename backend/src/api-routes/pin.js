const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const max = 999999;
  const min = 100000;
  const pin = Math.floor(Math.random() * (max - min + 1)) + min;
  
  console.log(pin.toString());
  res.json({pin: pin.toString()});
})


module.exports = router;