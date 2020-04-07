import React from "react";
import PropTypes from "prop-types";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Container, Typography } from "@material-ui/core";
import { ReactComponent as SpotifyIcon } from "../../icons/icons8-spotify.svg";

import styles from "./mediaselectionpage.module.css";
import CardButton from "../../components/CardButton";

const MediaSelectionPage = ({ handleClick }) => {
  return (
    <div className={styles.backgroundContainer}>
      <Container maxWidth="sm" classes={{ root: styles.pageContainer }}>
        <div className={styles.textBox}>
          <Typography variant="h2" classes={{ root: styles.title }}>
            Choose a music player
          </Typography>
        </div>
        <div className={styles.buttonBox}>
          <CardButton
            handleClick={handleClick}
            label="Spotify"
            icon={<SpotifyIcon className={styles.icon} />}
          />
          <CardButton
            handleClick={handleClick}
            label="Youtube"
            icon={<YouTubeIcon classes={{ root: styles.icon }} />}
          />
        </div>
      </Container>
    </div>
  );
};

MediaSelectionPage.defaultProps = {
  handleClick: () => {},
};

MediaSelectionPage.propTypes = {
  handleClick: PropTypes.func,
};

export default MediaSelectionPage;
