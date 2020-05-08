import React from "react";
import PropTypes from "prop-types";
import {Typography, Divider } from "@material-ui/core";
import styles from "./mediaviewpage.module.css";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";

const MediaViewPage = ({ handleClick, listOfSearchResults, pin }) => {
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
          <Typography variant="h4" classes={{ root: styles.nowPlaying }}>
            Now Playing
          </Typography>
          <Divider classes={{ root: styles.nowPlaying }}/>
    </main>
      <RightDrawer handleClick={handleClick} pin={pin}/>
    </div>
  );
};

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
