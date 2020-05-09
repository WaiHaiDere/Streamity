import {
  spotifyTokenRoute,
  spotifySearchRoute,
  updateTokenRoute,
  spotifyPlayerPlayRoute,
  spotifyPlayerPauseRoute,
} from "./apiRoutes";

export const getSpotifyToken = async (authCode) => {
  const newParams = {
    authCode,
  };

  const reqBody = JSON.stringify(newParams);

  const res = await fetch(spotifyTokenRoute, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
    body: reqBody,
  }).then((response) => response.json());

  return res;
};

export const getSpotifySearches = async (searchTitle, authToken) => {
  const res = await fetch(spotifySearchRoute, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      title: searchTitle,
      token: authToken,
    },
  }).then((response) => response.json());
  return res;
};

export const updateSpotifyToken = async ({ token, id }) => {
  const newParams = {
    authToken: token,
  };

  const reqBody = JSON.stringify(newParams);

  const res = await fetch(updateTokenRoute(id), {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "PUT",
    body: reqBody,
  }).then((response) => response.json());

  return res;
};

export const postPlay = async ({ token, deviceId }) => {
  const newParams = {
    authToken: token,
    deviceId: deviceId,
  };

  const reqBody = JSON.stringify(newParams);

  const res = await fetch(spotifyPlayerPlayRoute, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "PUT",
    body: reqBody,
  }).then((response) => response.json());

  return res;
};

export const postPause = async ({ token, deviceId }) => {
  const newParams = {
    authToken: token,
    deviceId: deviceId,
  };

  const reqBody = JSON.stringify(newParams);

  const res = await fetch(spotifyPlayerPauseRoute, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "PUT",
    body: reqBody,
  }).then((response) => response.json());

  return res;
};

export default { getSpotifyToken, getSpotifySearches };
