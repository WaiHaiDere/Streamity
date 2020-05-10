import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  getSpotifySearches,
  postPlay,
  postPause,
} from "../services/spotifyService";
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
  const [pin, setPin] = useState("123456");

  const handleClick = () => {
    console.log("handleChange");
  };

  const getSpotifySearchResults = async (title) => {
    const results = await getSpotifySearches(title, token);
    return results;
  };

  const handlePlay = async (deviceId) => {
    const results = await postPlay(token, deviceId);
    return results;
  };

  const handlePause = async (deviceId) => {
    const results = await postPause(token, deviceId);
    return results;
  };

  const [chatMessages, setChatMessages] = useState([
    {
      user: "Mish",
      message: "I love this song!",
    },
    {
      user: "Tyger",
      message: "Agreed",
    },
    {
      user: "Josh",
      message: "Major fan!",
    },
    {
      user: "Ryan",
      message: "Guys have you seen.",
    },
  ]);

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
    pin, // michelle's addition
    chatMessages,
  };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
