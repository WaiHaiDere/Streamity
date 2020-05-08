import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider, IconButton } from "@material-ui/core";
import styles from "./mediaviewpage.module.css";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";
import albumArt from "./tempAlbumArt.jpg";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

const MediaViewPage = ({
  handleClick,
  listOfSearchResults,
  chatMessages,
  pin,
}) => {
  return (
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
              <IconButton>
                <PlayCircleFilledIcon />
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
        </div>
      </main>
      <RightDrawer
        handleClick={handleClick}
        chatMessages={chatMessages}
        pin={pin}
      />
    </div>
  );
};

MediaViewPage.defaultProps = {
  handleClick: () => {},
  listOfSearchResults: [],
  chatMessages: [],
  pin: "",
};

MediaViewPage.propTypes = {
  handleClick: PropTypes.func,
  listOfSearchResults: PropTypes.arrayOf(PropTypes.string),
  chatMessages: PropTypes.arrayOf(PropTypes.string),
  pin: PropTypes.string,
};

export default MediaViewPage;
