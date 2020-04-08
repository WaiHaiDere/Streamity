import React from "react";
import PropTypes from "prop-types";
import { Container, Typography } from "@material-ui/core";

import styles from "./mediaviewpage.module.css";
import LeftDrawer from "../../components/LeftDrawer/LeftDrawer"

const MediaViewPage = ({ handleClick, handleDrawerOpen, handleDrawerClose, open }) => {
  return (
    <div>
      <LeftDrawer open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} handleClick={handleClick}/>
    </div>
  );
};

MediaViewPage.defaultProps = {
  handleClick: () => {},
};

MediaViewPage.propTypes = {
  handleClick: PropTypes.func,
};

export default MediaViewPage;
