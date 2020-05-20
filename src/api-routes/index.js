const express = require("express");
const addPinRoutes = require("./pin");
const addSpotifyRoutes = require("./spotify");

const router = express.Router();
addPinRoutes(router);
addSpotifyRoutes(router);


module.exports = router;
