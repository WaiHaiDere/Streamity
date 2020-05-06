import React from "react";
import PropTypes from "prop-types";
// import { Container, Typography } from "@material-ui/core";

// import styles from "./mediaviewpage.module.css";
import Script from "react-load-script";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";

const MediaViewPage = ({ handleClick, listOfSearchResults, pin }) => {
  return (
    <div>
      <Script
      url="https://sdk.scdn.co/spotify-player.js"
      onLoad={handleScriptLoad()}
      onError={handleScriptError()}
    />
      <LeftDrawer
        handleClick={handleClick}
        listOfSearchResults={listOfSearchResults}
      />
      {/* <SpotifyPlayer
      token="BQCMG3Y3ac27RWFyNBCQ3Q7sfakxG13m1H9Y_tuqf5ICM22bpqvDEeZMvFjoUgjAJluemSemERWgotVboFYu1nMmJy3Zi3OQtMWeUTzqz5RTxDvaQV0yunsx1PDl4ihPYBJ51YcBcs3NjsrNUy-U8WSdLWLqrdB0NUdXu8dS8fDK"
      uris={['spotify:artist:4EzkuveR9pLvDVFNx6foYD']}
      /> */}
      <RightDrawer handleClick={handleClick} pin={pin} />
    </div>
  );
};

const handleScriptError = () => {
  console.log("ERROR LOADING SCRIPT");
}

const handleScriptLoad = () => {
  window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQClaGRve1tKm9sohcLrI7U2G4Qu5m1QYWuIyBYMBUIH-qkC-ZvfvgEK-hx_3OsaAQpWiUjUWRmOP5kAtruv8NiMmU4bQ0oZRR54EBU0yIi18yK3EZGEjPAXG7lvbaS0qHM4UzvgrrI6PBP_XQcgei86UG7U1DtmNgnueKFUOhYD';
    const player = new window.Spotify.Player({
      name: 'Streamity',
      getOAuthToken: cb => { cb(token); }
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  };
}

MediaViewPage.defaultProps = {
  handleClick: () => {},
  listOfSearchResults: [],
  pin: "",
};

MediaViewPage.propTypes = {
  handleClick: PropTypes.func,
  listOfSearchResults: PropTypes.arrayOf(PropTypes.string),
  pin: PropTypes.string,
};

export default MediaViewPage;
