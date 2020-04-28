const express = require("express");
const queryString = require("querystring");

const router = express.Router();

const SPOTIFY_AUTH_END_POINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "84075fd82c074e5aac8e8f5b8c05d5fc";
const REDIRECT_URI = "http://localhost:3000/media"; 

router.get("/login", async (request, response) => {
    response.redirect(SPOTIFY_AUTH_END_POINT+"?"+
        queryString.stringify({
            response_type: 'code',
            client_id: CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            scope: "streaming",
        }));
});

// router.post("/post", async (request, response) => {

// })

module.exports = router