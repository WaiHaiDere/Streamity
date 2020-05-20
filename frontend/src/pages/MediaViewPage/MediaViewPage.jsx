/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
// import { Container, Typography } from "@material-ui/core";

// import styles from "./mediaviewpage.module.css";
import Script from "react-load-script";
import { Typography, Divider, IconButton } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistTable from "../../components/PlaylistTable/PlaylistTable";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import styles from "./mediaviewpage.module.css";

const MediaViewPage = ({
  handleClickPlayPause,
  listOfSearchResults,
  handleClick,
  details,
  chatMessageList,
  // memberList,
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
  setPlayerState,
  playerState,
  handleNext,
  handlePrev,
  currentlyPlaying,
}) => {
  const handleScriptError = () => {
    console.log("ERROR LOADING SCRIPT");
  };

  const handleScriptLoad = () => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Streamity",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });

      // Error handling
      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      player.addListener("playback_error", ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener("player_state_changed", (state) => {
        console.log(state);
        setPlayerState(state);
      });

      // Ready
      player.addListener("ready", async ({ device_id }) => {
        await addDeviceID(device_id);
        console.log("Ready with Device ID", device_id);
      });

      // Not Ready
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // Connect to the player!
      player.connect();
    };
  };

  return (
    <div>
      {token && !scriptLoaded ? (
        <Script
          url="https://sdk.scdn.co/spotify-player.js"
          onLoad={handleScriptLoad()}
          onError={handleScriptError()}
        />
      ) : null}
      <div className={styles.backgroundContainer}>
        <LeftDrawer
          handleClick={handleClick}
          listOfSearchResults={listOfSearchResults}
          handleChange={handleChange}
          handleClickSearch={handleClickSearch}
          addToPlaylist={addToPlaylist}
        />
        <main className={styles.centrePanel}>
          <Typography variant="h1" classes={{ root: styles.title }}>
            Streamity
          </Typography>
          <div>
            <Typography variant="h4" classes={{ root: styles.nowPlaying }}>
              Now Playing
            </Typography>
            <Divider classes={{ root: styles.nowPlaying }} />
            <div className={styles.albumArt}>
              <img
                src={playerState.track_window.current_track.album.images[0].url}
                style={{ height: 300 }}
                alt="Blank-text"
              />
              <Typography>
                {playerState.track_window.current_track.name}
              </Typography>
              <Typography>
                {playerState.track_window.current_track.artists[0].name}
              </Typography>
              <div>
                <IconButton>
                  <ShuffleIcon />
                </IconButton>
                <IconButton onClick={handlePrev}>
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton onClick={handleClickPlayPause}>
                  {isPlay ? (
                    <PauseCircleFilledIcon />
                  ) : (
                    <PlayCircleFilledIcon />
                  )}
                </IconButton>
                <IconButton onClick={handleNext}>
                  <SkipNextIcon />
                </IconButton>
                <IconButton>
                  <RepeatIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h4" classes={{ root: styles.nowPlaying }}>
              Next Up
            </Typography>
            <Divider classes={{ root: styles.nowPlaying }} />
            <PlaylistTable
              playlist={playlist}
              currentlyPlaying={currentlyPlaying}
            />
          </div>
        </main>
        <RightDrawer
          handleChatChange={handleChatChange}
          handleClickSend={handleClickSend}
          chatMessageList={chatMessageList}
          pin={details.pin}
        />
      </div>
    </div>
  );
};

MediaViewPage.defaultProps = {
  handleClick: () => {},
  listOfSearchResults: [{}],
  chatMessageList: [{}],
  // memberList: [{}],
  details: {
    pin: "",
    username: "",
  },
  token: "",
  handleClickPlayPause: () => {},
  isPlay: false,
  addDeviceID: () => {},
  scriptLoaded: false,
  handleChange: () => {},
  handleClickSearch: () => {},
  handleChatChange: () => {},
  handleClickSend: () => {},
  addToPlaylist: () => {},
  playlist: [],
  setPlayerState: () => {},
  handleNext: () => {},
  handlePrev: () => {},
  currentlyPlaying: 0,
  playerState: {},
};

MediaViewPage.propTypes = {
  handleClick: PropTypes.func,
  listOfSearchResults: PropTypes.arrayOf(PropTypes.object),
  details: PropTypes.shape({
    pin: PropTypes.string,
    username: PropTypes.string,
  }),
  // memberList: PropTypes.arrayOf(PropTypes.object),
  token: PropTypes.string,
  chatMessageList: PropTypes.arrayOf(PropTypes.object),
  handleClickPlayPause: PropTypes.func,
  isPlay: PropTypes.bool,
  addDeviceID: PropTypes.func,
  scriptLoaded: PropTypes.bool,
  handleChange: PropTypes.func,
  handleClickSearch: PropTypes.func,
  handleChatChange: PropTypes.func,
  handleClickSend: PropTypes.func,
  addToPlaylist: PropTypes.func,
  playlist: PropTypes.arrayOf(PropTypes.object),
  setPlayerState: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  currentlyPlaying: PropTypes.number,
  playerState: PropTypes.objectOf(
    PropTypes.oneOf([PropTypes.object, PropTypes.string])
  ),
};

export default MediaViewPage;
