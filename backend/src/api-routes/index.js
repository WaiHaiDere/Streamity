const express = require("express");
const addPinRoutes = require("./pin");

const router = express.Router();
addPinRoutes(router);

module.exports = router;
