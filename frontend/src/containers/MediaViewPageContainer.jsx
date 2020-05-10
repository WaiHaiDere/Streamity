import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  getSpotifySearches,
  postPlay,
  postPause,
  addDeviceID as addDeviceIDRequest,
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
  const [isPlay, setPlayStatus] = useState(false);
  const history = useHistory();
  const [details, setDetails] = useState({
    username: "",
    pin: "",
  });
  const [memberList, setMemberList] = useState([]);
  const { getGlobalState, existsInGlobalState } = useGlobalState();
  const [token, setToken] = useState("");
  const [deviceID, setDeviceID] = useState("");

  // const deviceID = "128f0602e8cb535ffb2528f63f9d55856f3116f4";

  const handleClick = () => {
    console.log("glick");
  };

  const getSpotifySearchResults = async (title) => {
    const results = await getSpotifySearches(title, token);
    return results;
  };

  const handlePlay = async (deviceId) => {
    const results = await postPlay({ token, deviceId });
    return results;
  };

  const handlePause = async (deviceId) => {
    const results = await postPause({ token, deviceId });
    return results;
  };

  const addDeviceID = async (device) => {
    await addDeviceIDRequest({ pin: details.pin, deviceID: device });
    setDeviceID(device);
  };

  const handleClickPlayPause = async () => {
    if (!isPlay) {
      console.log(isPlay);
      setPlayStatus(!isPlay);
      await handlePlay(deviceID);
    } else {
      console.log(isPlay);
      setPlayStatus(!isPlay);
      await handlePause(deviceID);
    }
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
        console.log(room.spotifyAuth);
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
    handleClickPlayPause,
    handleClick,
    listOfSearchResults,
    memberList,
    token,
    chatMessages,
    isPlay,
    addDeviceID,
  };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
