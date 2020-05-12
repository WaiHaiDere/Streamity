const express = require("express");
const queryString = require("querystring");
const fetch = require("node-fetch");
const Room = require("../db/models/roomSchema");


const router = express.Router();

const SPOTIFY_AUTH_END_POINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_AUTH_TOKEN_END_POINT = "https://accounts.spotify.com/api/token";
const SPOTIFY_TRACK_SEARCH_END_POINT = "https://api.spotify.com/v1/search";
const SPOTIFY_PLAYER_PLAY = "https://api.spotify.com/v1/me/player/play";
const SPOTIFY_PLAYER_PAUSE = "https://api.spotify.com/v1/me/player/pause";
const CLIENT_ID = "84075fd82c074e5aac8e8f5b8c05d5fc";
const CLIENT_SECRET = "e1d779aa26db4997af564836003e476b";
const REDIRECT_URI = "http://localhost:3000/buffer";
const AUTH_GRANT_TYPE = "authorization_code";
const SCOPE =
  "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state";

router.get("/login", async (request, response) => {
  response.redirect(
    SPOTIFY_AUTH_END_POINT +
      "?" +
      queryString.stringify({
        response_type: "code",
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        scope: SCOPE,
      })
  );
});

router.post("/authorise", async (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  const res = await fetch(SPOTIFY_AUTH_TOKEN_END_POINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: AUTH_GRANT_TYPE,
      code: request.body.authCode,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  }).then((response) => response.json());
  console.log(res);
  response.send(res);
});

router.get("/search", async (request, response) => {
  //console.log(request);
  response.header("Access-Control-Allow-Origin", "*");
  // https://api.spotify.com/v1/search?q=let it go&type=track&limit=10
  const res = await fetch(
    SPOTIFY_TRACK_SEARCH_END_POINT +
      "?q=" +
      request.headers.title +
      "&type=track&limit=10",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + request.headers.token,
      },
    }
  ).then((response) => response.json());
  console.log(res);
  response.send(res);
});

router.post("/play/:id", async (request, response) => {
  try{
    const foundRoom = await Room.findOne({pin: request.params.id});
    if(foundRoom !== null) {

      const deviceList = foundRoom.devices;
      deviceList.forEach(async (device) => {
        try {
            const res = await fetch(
              SPOTIFY_PLAYER_PLAY + "?device_id=" + device.device_id, //should be called deviceId
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: "Bearer " + device.authToken,
                },
              }
            ).then((response) => response.json());
            console.log(res);
            response.send(res);
          } catch (error) {}
      })

    } else {
      res.status(404).json({error: "Room not found. Please double check your PIN."});
    }
  } catch (err) {
    res.status(404).json({message: err.message});
  } 
});

router.post("/pause/:id", async (request, response) => {
  try{
    const foundRoom = await Room.findOne({pin: request.params.id});
    if(foundRoom !== null) {

      const deviceList = foundRoom.devices;
      deviceList.forEach(async (device) => {
        try {
            const res = await fetch(
              SPOTIFY_PLAYER_PAUSE + "?device_id=" + device.device_id, //should be called deviceId
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: "Bearer " + device.authToken,
                },
              }
            ).then((response) => response.json());
            console.log(res);
            response.send(res);
          } catch (error) {}
      })

    } else {
      res.status(404).json({error: "Room not found. Please double check your PIN."});
    }
  } catch (err) {
    res.status(404).json({message: err.message});
  } 
});

module.exports = router;
