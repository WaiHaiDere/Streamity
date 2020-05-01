const express = require("express");
const queryString = require("querystring");
const fetch = require("node-fetch");

const router = express.Router();

const SPOTIFY_AUTH_END_POINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_AUTH_TOKEN_END_POINT = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "84075fd82c074e5aac8e8f5b8c05d5fc";
const CLIENT_SECRET = "e1d779aa26db4997af564836003e476b";
const REDIRECT_URI = "http://localhost:3000/buffer"; 
const AUTH_GRANT_TYPE = "authorization_code";


router.get("/login", async (request, response) => {
    response.redirect(SPOTIFY_AUTH_END_POINT+"?"+
        queryString.stringify({
            response_type: 'code',
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            scope: "streaming",
        }));
});

router.get("/authorise", async (request, response) => {
    const res = await fetch(SPOTIFY_AUTH_TOKEN_END_POINT, {
        method: 'post',
        body: queryString.stringify({
            grant_type: AUTH_GRANT_TYPE,
            code: request.body.authCode,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        })
    }).then(response => response.json())
    response.send(res);
})

module.exports = router