import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";
import { getPersistentItem } from "../common/persistenceStore";
import {
  getSpotifyToken,
  updateSpotifyToken,
} from "../services/spotifyService";
import keys from "../hooks/GlobalState/keys";

const BufferpageContainer = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const { putGlobalState } = useGlobalState();

  const getAuthenticationToken = async (code) => {
    const resp = await getSpotifyToken(code);
    return resp.access_token;
  };

  // Adapted from: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=1&tab=votes#tab-top
  // This extracts the params from the URL.
  const getParameterByName = (name) => {
    const url = window.location.href;
    const newName = name.replace(/[[\]]/g, "\\$&");
    const regex = new RegExp(`[?&]${newName}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    const authCode = decodeURIComponent(results[2].replace(/\+/g, " "));
    return authCode;
  };

  useEffect(() => {
    async function getAuthToken() {
      const spotifyCode = getParameterByName("code");
      const spotifyToken = await getAuthenticationToken(spotifyCode);

      if (getPersistentItem(keys.SESSION)) {
        const session = getPersistentItem(keys.SESSION);

        const saveSession = {
          pin: session.pin,
          username: session.username,
          authToken: spotifyToken,
        };

        putGlobalState({
          key: keys.SESSION,
          value: saveSession,
        });
      }

      setRedirect(true);
    }
    getAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLoading = () => {
    setIsLoading(!isLoading);
  };

  const newProps = { isLoading, setLoading };

  return (
    <>
      {redirect && <Redirect to="/media" />}
      {React.cloneElement(children, { ...newProps })}
    </>
  );
};

BufferpageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
export default BufferpageContainer;
