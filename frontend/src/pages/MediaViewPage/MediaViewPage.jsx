/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
// import { Container, Typography } from "@material-ui/core";

// import styles from "./mediaviewpage.module.css";
import Script from "react-load-script";
import { Typography, Divider, IconButton } from "@material-ui/core";
import styles from "./mediaviewpage.module.css";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import PlaylistTable from "../../components/PlaylistTable/PlaylistTable";
import albumArt from "./tempAlbumArt.jpg";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

const MediaViewPage = ({
  handleClickPlayPause,
  listOfSearchResults,
  handleClick,
  details,
  memberList,
  token,
  chatMessages,
  pin,
  isPlay,
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
      });

      // Ready
      player.addListener("ready", ({ device_id }) => {
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

  console.log(memberList);
  return (
    <div>
      {token ? (
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
              <img src={albumArt} style={{ height: 300 }} />
              <Typography>Lover</Typography>
              <Typography>Taylor Swift</Typography>
              <div>
                <IconButton>
                  <ShuffleIcon />
                </IconButton>
                <IconButton>
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton onClick={handleClickPlayPause}>
                  {isPlay ? (
                    <PauseCircleFilledIcon />
                  ) : (
                    <PlayCircleFilledIcon />
                  )}
                </IconButton>
                <IconButton>
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
            <PlaylistTable />
          </div>
        </main>
        <RightDrawer
          handleClick={handleClick}
          chatMessages={chatMessages}
          pin={pin}
        />
      </div>
    </div>
  );
};

MediaViewPage.defaultProps = {
  handleClick: () => {},
  listOfSearchResults: [],
  memberList: [{}],
  token: "",
  chatMessages: [],
  pin: "",
  handleClickPlayPause: () => {},
};

MediaViewPage.propTypes = {
  handleClick: PropTypes.func,
  listOfSearchResults: PropTypes.arrayOf(PropTypes.string),
  details: PropTypes.shape({
    pin: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  memberList: PropTypes.arrayOf(PropTypes.object),
  token: PropTypes.string,
  chatMessages: PropTypes.arrayOf(PropTypes.string),
  handleClickPlayPause: PropTypes.func,
  isPlay: PropTypes.bool,
};

export default MediaViewPage;
