import React, { useState, useEffect } from "react";
import { getSpotifySearches } from "../services/spotifyService";
import { getRoom } from "../services/mediaSelectionService";
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

  const [details, setDetails] = useState({
    username: "",
    pin: "",
  });

  const { getGlobalState, existsInGlobalState } = useGlobalState();

  const handleClick = () => {
    console.log("handleChange");
  };

  const getSpotifySearchResults = async (title) => {
    const token =
      "BQAisni_WX9PwhnNuvwuy30RLw8BOCmLhitaklrr8C1tw6D7Apw5s8Ab3H4n_sQz6Gu9AlONCgjaqvrWD5X6XjDuaoc-HZ4s4yxSstkISHSO8pzkyy7iwy2gXera0bk_hZewacK2BlRDJ0WELjurIVwdkmqKRlP8MpTzJ6SX5jj4";
    const results = await getSpotifySearches(title, token);
    console.log(token);
    return results;
  };

  useEffect(() => {
    async function getInfo() {
      if (existsInGlobalState(keys.SESSION)) {
        const detailsFromContext = getGlobalState(keys.SESSION);
        setDetails(detailsFromContext);

        const room = getRoom(detailsFromContext.pin);
        console.log(room);
      }

      const results = await getSpotifySearchResults("tadow");
      console.log(results);
    }

    getInfo();
  }, []);

  const newProps = { details, handleClick, listOfSearchResults };
  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
