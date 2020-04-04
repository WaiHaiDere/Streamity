import React from "react";
import PropTypes from "prop-types";
import YouTubeIcon from '@material-ui/icons/YouTube';
import { SpotifyIcon } from "../../icons/icons8-spotify.svg"
import { Container, Typography } from "@material-ui/core";

import styles from "./mediaselectionpage.module.css";
import CardButton from "../../components/CardButton";

const MediaSelectionPage = ({ handleClick }) => {
  return (
    <div className={styles.backgroundContainer}>
      <Container maxWidth="sm" classes={{ root: styles.pageContainer }}>
      <div className={styles.textBox}>
        <Typography variant="h1" classes={{ root: styles.title }}>
          Streamity
        </Typography>
        <Typography variant="h4" classes={{ root: styles.slogan }}>
          Create. Join. Stream.
        </Typography>
      </div>
      <div className={styles.buttonBox}>
        <CardButton
          handleClick={handleClick}
          label="Spotify"
          icon={<SpotifyIcon classes={{ root: styles.icon }} />}
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
