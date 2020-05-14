import {
  spotifyTokenRoute,
  spotifySearchRoute,
  updateTokenRoute,
  spotifyPlayerPlayRoute,
  spotifyPlayerPauseRoute,
  spotifyPlayerNextRoute,
  spotifyPlayerPrevRoute
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

export const getSpotifySearches = async ({ searchTitle, authToken }) => {
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

export const postPlay = async (pin, uri) => {
  const newParams = {
    uris: uri ? uri : null,
  };

  const resqBody = JSON.stringify(newParams);
  const res = await fetch(spotifyPlayerPlayRoute(pin), {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: resqBody,
    method: "POST",
  }).then((response) => response.json());

  return res;
};

export const postPause = async (pin) => {
  const res = await fetch(spotifyPlayerPauseRoute(pin), {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
  }).then((response) => response.json());

  return res;
};

export const postNext = async (pin) => {
  const res = await fetch(spotifyPlayerNextRoute(pin), {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
  }).then((response) => response.json());

  return res;
};

export const postPrev = async (pin) => {
  const res = await fetch(spotifyPlayerPrevRoute(pin), {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
  }).then((response) => response.json());

  return res;
};

export default { getSpotifyToken, getSpotifySearches };
