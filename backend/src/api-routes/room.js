const express = require("express");
const crypto = require("crypto");
//const cors = require("cors");
const Room = require("../db/models/roomSchema");

const router = express.Router();

// Add new room
router.post("/", async (req, res) => {
  const max = 999999;
  const min = 100000;
  const pin = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  
  const newAdmin = {
    username: req.body.username,
    id: crypto.randomBytes(16).toString("hex"),
  }

  const member_list = [newAdmin];
  const newRoom = new Room({
    pin: pin,
    admin: newAdmin,
    member_list,
  })

  try{
    const newRoomReq = await newRoom.save();
    res.status(201).json(newRoomReq);
  } catch (err) {
    res.status(400).json({ message: err.message});
  }
})

// Get Room details
router.get("/:id", async (req, res) => {
  try{
    const foundRoom = await Room.findOne({pin: req.params.id});
    // console.log(foundRoom);
    if(foundRoom !== null) {
      res.status(201).send(foundRoom);
    } else {
      res.status(404).json({error: "Room not found. Please double check your PIN."});
    }
  } catch (err) {
    res.status(404).json({message: err.message});
  }
})

// Add new device
router.put("/:id/device", async (req, res) => {
  console.log(req.body);

  try{
    const foundRoom = await Room.findOne({pin: req.params.id});
    if(foundRoom !== null) {

      const device = {
        authToken: req.body.authToken,
        device_id: req.body.deviceID,
      }
      
      foundRoom.devices.push(device);
      const saveReq = await foundRoom.save();
      res.status(200).json(saveReq);
    } else {
      res.status(404).json({error: "Room not found. Please double check your PIN."});
    }
  } catch (err) {
    res.status(404).json({message: err.message});
  }
})

// add new user
router.put("/:id", async (req, res) => {
  try{
    const foundRoom = await Room.findOne({pin: req.params.id});
    if(foundRoom !== null) {

      const newMember = {
        username: req.body.username,
        id: crypto.randomBytes(16).toString("hex"),
      }
      foundRoom.member_list.push(newMember);
      const saveReq = await foundRoom.save();
      res.status(200).json(saveReq);
    } else {
      res.status(404).json({error: "Room not found. Please double check your PIN."});
    }
  } catch (err) {
    res.status(404).json({message: err.message});
  }
})

module.exports = router;