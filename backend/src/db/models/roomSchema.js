const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    pin: {
      type: String,
      required: true,
    },
    admin: {
      username: {
        type: String,
      },
      id: {
        type: String,
      },
    },
    spotifyAuth: {
      type: String,
      default: "",
    },
    member_list: {
      type: Array,
      default: []
    },
    device_list: {
      type: Array,
      default: []
    }
  }
);

module.exports = mongoose.model("Room", roomSchema);
