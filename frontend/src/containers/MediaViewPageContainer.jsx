import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import io from "socket.io-client/dist/socket.io";
import {
  getSpotifySearches,
  postPlay,
  postPause,
  addToPlaylist as addToPlaylistRequest,
  playlistNext,
} from "../services/spotifyService";
import {
  addDevice as addDeviceIDRequest,
  addToQueue as addToQueueRequest,
  getChat as getChatRequest,
} from "../services/joinService";
import { getRoom } from "../services/mediaSelectionService";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";
import keys from "../hooks/GlobalState/keys";
import albumArtPlaceholder from "../icons/GenericAlbumArt.png";

let roomPin;

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

  const [isFirstSong, setIsFirstSong] = useState(true);
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
              url: albumArtPlaceholder,
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

  // eslint-disable-next-line camelcase

  const handleChange = (event) => {
    const { value } = event.target;
    setUserSearch(value);
  };

  const addToPlaylist = async (song) => {
    const res = await addToPlaylistRequest({
      pin: details.pin,
      song,
      isFirstSong,
    });
    setIsFirstSong(false);
    setPlaylist(res.playlist.song_list);
  };

  const handleClick = () => {};

  const handleClickSearch = async () => {
    const results = await getSpotifySearches({
      searchTitle: userSearch,
      authToken: token,
    });
    setListOfSearchResults(results);
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

  const handlePlay = async () => {
    const results = await postPlay(details.pin);

    return results;
  };

  const handlePause = async () => {
    const results = await postPause(details.pin);
    return results;
  };

  const handleNext = async () => {
    const response = await playlistNext({ pin: details.pin });
    setPlaylist(response.playlist);
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
    if (playlist.length !== 0) {
      if (!isPlay) {
        setPlayStatus(!isPlay);
        await handlePlay();
      } else {
        setPlayStatus(!isPlay);
        await handlePause();
      }
    }
  };

  useEffect(() => {
    async function setPlayer() {
      setPlayStatus(!playerState.paused);
      if (!playerState.paused) {
        setIsFirstSong(false);
      }
      const room = await getRoom(details.pin);
      setPlaylist(room.playlist.song_list);
    }

    setPlayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState]);

  useEffect(() => {
    async function getInfo() {
      if (existsInGlobalState(keys.SESSION)) {
        const detailsFromContext = getGlobalState(keys.SESSION);
        const { username, pin } = { ...detailsFromContext };
        setDetails({ username, pin });
        roomPin = pin;
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
    });

    // Set up socket io client to subscribe to chat messages
    socket.on("chat message", (response) => {
      setChatMessageList(response.chatList);
    });

    getInfo();

    setInterval(async () => {
      if (roomPin) {
        const response = await getChatRequest({ pin: roomPin });
        setChatMessageList(response.chat);
      }
    }, 400);
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
    chatMessage,
  };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
