const express = require("express");
const cors = require("cors");
const Room = require("../db/models/room");

const router = express.Router();

router.post("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const max = 999999;
  const min = 100000;
  const pin = (Math.floor(Math.random() * (max - min + 1)) + min).toString();

  // console.log(req.body.username);
  
  const newRoom = new Room({
    pin: pin,
    admin: req.body.username
  })

  try{
    const newRoomReq = await newRoom.save();
    res.status(201).json(newRoomReq);
  } catch (err) {
    res.status(400).json({ message: err.message});
  }
})

router.get("/:id", async (req, res) => {
  try{
    const foundRoom = await Room.findOne({pin: req.params.id});
    console.log(foundRoom);
    if(foundRoom !== null) {
      res.status(201).send(foundRoom);
    } else {
      res.status(404).json({error: "Room not found. Please double check your PIN."});
    }
  } catch (err) {
    res.status(404).json({message: err.message});
  }
})
module.exports = router;