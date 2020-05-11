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
    member_list: {
      type: Array,
      default: []
    },
    devices: [
      {
        authToken: {
          type: String,
        },
        device_id: {
          type: String
        },
      }
    ]    
      
  }
);

module.exports = mongoose.model("Room", roomSchema);
