import { spotifyTokenRoute, updateTokenRoute } from "./apiRoutes";

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
    method: "POST",
    body: reqBody,
  }).then((response) => response.json());

  return res;
};

export default getSpotifyToken;
