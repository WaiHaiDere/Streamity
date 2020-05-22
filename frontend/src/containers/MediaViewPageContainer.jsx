import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client/dist/socket.io";
import {
  getSpotifySearches,
  postPlay,
  postPause,
  addToPlaylist as addToPlaylistRequest,
  playlistNext,
  playlistPrev,
} from "../services/spotifyService";
import {
  addDevice as addDeviceIDRequest,
  addToQueue as addToQueueRequest,
} from "../services/joinService";
import { getRoom } from "../services/mediaSelectionService";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";
import keys from "../hooks/GlobalState/keys";
import questionMarkArt from "../icons/question_mark_PNG1.png";

const MediaViewPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [listOfSearchResults, setListOfSearchResults] = useState([]);
  const [isPlay, setPlayStatus] = useState(false);
  const history = useHistory();
  const [details, setDetails] = useState({
    username: "",
    pin: "",
  });
  const [memberList, setMemberList] = useState([]);
  const { getGlobalState, existsInGlobalState } = useGlobalState();
  const [token, setToken] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessageList, setChatMessageList] = useState([]);
  const socket = io("http://localhost:3001/");
  const [playerState, setPlayerState] = useState({
    paused: true,
    track_window: {
      current_track: {
        album: {
          images: [
            {
              url: questionMarkArt,
            },
          ],
          name: "",
        },
        artists: [
          {
            name: "",
          },
        ],
        name: "",
      },
    },
  });
  const [currentlyPlaying, setCurrentlyPlaying] = useState(0);
  const [playlist, setPlaylist] = useState([
    {
      songName: "",
      duration: 0,
      artist: [
        {
          name: "",
        },
      ],
      album: {
        name: "",
      },
    },
  ]);

  // const deviceID = "128f0602e8cb535ffb2528f63f9d55856f3116f4";
  // eslint-disable-next-line camelcase

  const handleChange = (event) => {
    const { value } = event.target;
    setUserSearch(value);
    // console.log(userSearch);
  };

  const addToPlaylist = async (song) => {
    const res = await addToPlaylistRequest({ pin: details.pin, song });
    // console.log(res);
    setPlaylist(res.playlist.song_list);
    // console.log(res);
  };

  const handleClick = () => {};

  const handleClickSearch = async () => {
    const results = await getSpotifySearches({
      searchTitle: userSearch,
      authToken: token,
    });
    console.log(results);
    setListOfSearchResults(results);
    console.log(listOfSearchResults);
    return results;
  };

  const handleChatChange = (event) => {
    const { value } = event.target;
    setChatMessage(value);
  };

  const handleClickSend = async () => {
    socket.emit(
      "chat message",
      {
        user: details.username,
        message: chatMessage,
      },
      details.pin
    );
    setChatMessage("");
  };

  const getSpotifySearchResults = async (title) => {
    const results = await getSpotifySearches(title, token);
    // console.log(results);
    setListOfSearchResults(results);
    // console.log(listOfSearchResults);
    return results;
  };

  const handlePlay = async () => {
    const results = await postPlay(details.pin, null);
    return results;
  };

  const handlePause = async () => {
    const results = await postPause(details.pin);
    return results;
  };

  const handleNext = async () => {
    const response = await playlistNext({ pin: details.pin });
    setCurrentlyPlaying(response.playlist.current_index);
  };

  const handlePrev = async () => {
    const response = await playlistPrev({ pin: details.pin });
    setCurrentlyPlaying(response.playlist.current_index);
  };

  const addDeviceID = async (device) => {
    await addDeviceIDRequest({
      pin: details.pin,
      deviceID: device,
      authToken: token,
    });
    await addToQueueRequest({
      pin: details.pin,
      deviceID: device,
      authToken: token,
    });
    setScriptLoaded(true);
  };

  const handleClickPlayPause = async () => {
    if (!isPlay) {
      console.log(isPlay);
      setPlayStatus(!isPlay);
      await handlePlay();
    } else {
      console.log(isPlay);
      setPlayStatus(!isPlay);
      await handlePause();
    }
  };

  useEffect(() => {
    setPlayStatus(!playerState.paused);
  }, [playerState]);

  useEffect(() => {
    async function getInfo() {
      console.log("here2");
      if (existsInGlobalState(keys.SESSION)) {
        const detailsFromContext = getGlobalState(keys.SESSION);
        const { username, pin } = { ...detailsFromContext };
        setDetails({ username, pin });
        setToken(detailsFromContext.authToken);
        const room = await getRoom(detailsFromContext.pin);
        if (room.error) {
          history.push("/join");
        }
        setMemberList(room.member_list);
        setPlaylist(room.playlist.song_list);
        setChatMessageList(room.chat);
        // console.log(room.spotifyAuth);
      } else {
        history.push("/join");
      }
    }

    socket.on("connect", () => {
      const detailsFromContext = getGlobalState(keys.SESSION);
      const { username, pin } = { ...detailsFromContext };
      console.log("socket connected", socket.id); // true
      console.log(`${username} has joined room ${pin}`);
      socket.emit("join room", username, pin);
    });

    socket.on("disconnect", () => {
      const detailsFromContext = getGlobalState(keys.SESSION);
      const { username, pin } = { ...detailsFromContext };
      console.log("socket disconnected", socket.id); // true
      console.log(`${username} has left room ${pin}`);
      socket.emit("leave room", pin);
    });

    socket.on("join room", (username, pin) => {
      console.log(`${username} has joined room ${pin}`);
    });

    socket.on("leave room", (username, pin) => {
      console.log(`${username} has left room ${pin}`);
    });

    // Set up socket io client to subscribe to chat messages
    socket.on("chat message", (response) => {
      setChatMessageList(response.chatList);
    });

    getInfo();
  }, []);

  const newProps = {
    details,
    handleClickPlayPause,
    handleClick,
    listOfSearchResults,
    memberList,
    chatMessageList,
    token,
    isPlay,
    addDeviceID,
    scriptLoaded,
    handleChange,
    handleClickSearch,
    handleChatChange,
    handleClickSend,
    addToPlaylist,
    playlist,
    playerState,
    setPlayerState,
    handleNext,
    handlePrev,
    currentlyPlaying,
    chatMessage,
  };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
