const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    pin: {
      type: String,
      required: true,
    },
    admin: {
      type: String,
      required: true, 
      spotifyCodeAuth: String,
    }
  }
);

module.exports = mongoose.model("Room", roomSchema);
