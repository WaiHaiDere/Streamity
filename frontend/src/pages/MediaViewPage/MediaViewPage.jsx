import React from "react";
import PropTypes from "prop-types";
import { Container, Typography } from "@material-ui/core";

import styles from "./mediaviewpage.module.css";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer"

const MediaViewPage = ({ handleClick, handleDrawerOpen, handleDrawerClose, open, listOfSearchResults }) => {
  return (
    <div>
      <LeftDrawer 
      open={open} 
      handleDrawerOpen={handleDrawerOpen} 
      handleDrawerClose={handleDrawerClose} 
      handleClick={handleClick} 
      listOfSearchResults={listOfSearchResults}
      />
    </div>
  );
};

MediaViewPage.defaultProps = {
  handleClick: () => {},
  open: false, 
  handleDrawerClose: () => {}, 
  handleDrawerOpen: () => {},
  listOfSearchResults: []
};

MediaViewPage.propTypes = {
  handleClick: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  handleDrawerOpen: PropTypes.func, 
  open: PropTypes.bool,
  listOfSearchResults: PropTypes.array,
};

export default MediaViewPage;
