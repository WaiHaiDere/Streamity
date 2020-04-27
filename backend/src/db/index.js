const mongoose = require("mongoose");

function connect() {
  return mongoose.connect("mongodb+srv://streamityDBUser:streamity@streamity-9epfu.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

function drop() {
  return mongoose.connection.dropDatabase();
}

function close() {
  return mongoose.disconnect();
}

module.exports = {connect, drop, close}