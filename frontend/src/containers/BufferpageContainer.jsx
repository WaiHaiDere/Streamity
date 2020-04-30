import React, { useState, useEffect } from "react";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";
import keys from "../hooks/GlobalState/keys";


const BufferpageContainer = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [authCode, setAuthCode] = useState("");

  const {
    getGlobalState,
    existsInGlobalState,
    putGlobalState,
  } = useGlobalState();

  useEffect(() => {
    const spotifyCode = getParameterByName("code");
    putGlobalState({key: keys.SPOTIFY_AUTH_CODE, value: {spotifyAuthCode: spotifyCode}});
    
  },[]);

  const setLoading = () => {
    setIsLoading(isLoading => !isLoading)
  };

  // Adapted from: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=1&tab=votes#tab-top
  // This extracts the params from the URL. 
  const getParameterByName = (name, url) => {
    if (!url) url = window.location.href; // If there is no input param, it finds it from the URL.
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    const authCode = decodeURIComponent(results[2].replace(/\+/g, ' '));
    return authCode;
  };

  const newProps = { isLoading, setLoading };


  return React.cloneElement(children, { ...newProps });
};

export default BufferpageContainer;
