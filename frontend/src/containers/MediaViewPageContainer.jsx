import React, { useState, useEffect } from "react";
import {
  getSpotifySearches,
  getSpotifyToken,
} from "../services/spotifyService";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";

import keys from "../hooks/GlobalState/keys";

const MediaViewPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [listOfSearchResults, setlistOfSearchResults] = useState(
    // hardcoding this for now
    [
      {
        title: "Ryan",
        artist: "artist1",
      },
      {
        title: "YEET",
        artist: "artist2",
      },
    ]
  );

  const [pin, setPin] = useState("123456"); // Hardcoded for now.

  const {
    getGlobalState,
    existsInGlobalState,
    putGlobalState,
  } = useGlobalState();

  const handleClick = () => {
    console.log("handleChange");
  };

  useEffect(async () => {
    const results = await getSpotifySearchResults("tadow");
    console.log(results);
  }, []);

  const getSpotifySearchResults = async (title) => {
    // const token = getGlobalState(keys.SPOTIFY_AUTH_TOKEN);
    const token =
      "BQAisni_WX9PwhnNuvwuy30RLw8BOCmLhitaklrr8C1tw6D7Apw5s8Ab3H4n_sQz6Gu9AlONCgjaqvrWD5X6XjDuaoc-HZ4s4yxSstkISHSO8pzkyy7iwy2gXera0bk_hZewacK2BlRDJ0WELjurIVwdkmqKRlP8MpTzJ6SX5jj4";
    const results = await getSpotifySearches(title, token);
    console.log(token);
    return results;
  };

  const newProps = { pin, handleClick, listOfSearchResults };
  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
