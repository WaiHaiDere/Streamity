import React, { useState, useEffect } from "react";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";
import { getSpotifyToken } from "../services/spotifyService";
import keys from "../hooks/GlobalState/keys";

const BufferpageContainer = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authCode, setAuthCode] = useState("");

  const {
    getGlobalState,
    existsInGlobalState,
    putGlobalState,
  } = useGlobalState();

  useEffect(async () => {
    const spotifyCode = getParameterByName("code");
    const spotifyToken = await getAuthenticationToken(spotifyCode);
    console.log(spotifyToken);

    putGlobalState({
      key: keys.SPOTIFY_AUTH_TOKEN,
      value: { spotifyAuthToken: spotifyToken },
    });
  }, []);

  const setLoading = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  const getAuthenticationToken = async (code) => {
    const resp = await getSpotifyToken(code);
    // console.log(resp);
    return resp.access_token;
  };

  // Adapted from: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=1&tab=votes#tab-top
  // This extracts the params from the URL.
  const getParameterByName = (name, url) => {
    if (!url) url = window.location.href; // If there is no input param, it finds it from the URL.
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    const authCode = decodeURIComponent(results[2].replace(/\+/g, " "));
    return authCode;
  };

  const newProps = { isLoading, setLoading };

  return React.cloneElement(children, { ...newProps });
};

export default BufferpageContainer;
