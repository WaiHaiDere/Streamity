import React from "react";
import PropTypes from "prop-types";
// import { Container, Typography } from "@material-ui/core";

// import styles from "./mediaviewpage.module.css";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";

const MediaViewPage = ({ handleClick, listOfSearchResults, pin }) => {
  return (
    <div>
      <LeftDrawer
        handleClick={handleClick}
        listOfSearchResults={listOfSearchResults}
      />
      <RightDrawer handleClick={handleClick} pin={pin} />
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
