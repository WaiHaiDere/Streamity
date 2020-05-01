import { spotifyTokenRoute } from "./apiRoutes";

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

export default getSpotifyToken;
