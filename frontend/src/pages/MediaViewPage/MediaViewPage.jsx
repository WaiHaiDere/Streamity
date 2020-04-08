import React from "react";
import PropTypes from "prop-types";
import { Container, Typography } from "@material-ui/core";

import styles from "./mediaviewpage.module.css";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer";
import RightDrawer from "../../components/RightDrawer/RightDrawer";

const MediaViewPage = ({ handleClick, handleDrawerOpen, handleDrawerClose, open, listOfSearchResults, pin }) => {
  return (
    <div>
      <LeftDrawer 
      open={open} 
      handleDrawerOpen={handleDrawerOpen} 
      handleDrawerClose={handleDrawerClose} 
      handleClick={handleClick} 
      listOfSearchResults={listOfSearchResults}
      />
      <RightDrawer 
      handleClick={handleClick}
      pin={pin}
      />
    </div>
  );
};

MediaViewPage.defaultProps = {
  handleClick: () => {},
  open: false, 
  handleDrawerClose: () => {}, 
  handleDrawerOpen: () => {},
  listOfSearchResults: [],
  pin: "",
};

MediaViewPage.propTypes = {
  handleClick: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  handleDrawerOpen: PropTypes.func, 
  open: PropTypes.bool,
  listOfSearchResults: PropTypes.array,
  pin: PropTypes.string,
};

export default MediaViewPage;
