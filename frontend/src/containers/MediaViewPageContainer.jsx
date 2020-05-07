import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getSpotifySearches } from "../services/spotifyService";
import { getRoom } from "../services/mediaSelectionService";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";

import keys from "../hooks/GlobalState/keys";

const MediaViewPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [listOfSearchResults] = useState(
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
  const history = useHistory();
  const [details, setDetails] = useState({
    username: "",
    pin: "",
  });
  const [memberList, setMemberList] = useState([]);
  const { getGlobalState, existsInGlobalState } = useGlobalState();
  const [token, setToken] = useState("");

  const handleClick = () => {
    console.log("handleChange");
  };

  const getSpotifySearchResults = async (title) => {
    const results = await getSpotifySearches(title, token);
    return results;
  };

  useEffect(() => {
    async function getInfo() {
      if (existsInGlobalState(keys.SESSION)) {
        const detailsFromContext = getGlobalState(keys.SESSION);
        setDetails(detailsFromContext);

        const room = await getRoom(detailsFromContext.pin);
        if (room.error) {
          history.push("/join");
        }
        setMemberList(room.member_list);
        setToken(room.spotifyAuth);
      } else {
        history.push("/join");
      }

      await getSpotifySearchResults("tadow");
      // setlistOfSearchResults(results);
    }

    getInfo();
  }, []);

  const newProps = {
    details,
    handleClick,
    listOfSearchResults,
    memberList,
    token,
  };
  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
