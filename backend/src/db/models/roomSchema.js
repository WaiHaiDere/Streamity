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
    playlist: {
      current_index : {
        type: Number,
        default: 0,
      },
      song_list: {
        type: Array,
        default: [],
      }
    },
    currentlyPlaying: {
      type: Boolean,
      default: false,
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
    ],
    chat: [
      {
        user: {
          type: String,
        },
        message: {
          type: String,
        }
      }
    ]
      
  }
);

module.exports = mongoose.model("Room", roomSchema);
