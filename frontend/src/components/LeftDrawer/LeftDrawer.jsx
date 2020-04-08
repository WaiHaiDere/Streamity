import React from 'react';
import { 
  TextField, 
  Drawer, 
  Toolbar, 
  List, 
  Typography, 
  Divider, 
  IconButton } from '@material-ui/core'
import PropTypes from "prop-types";

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';

import styles from "./leftdrawer.module.css";

const LeftDrawer = ({ open, handleDrawerClose, handleDrawerOpen, handleClick }) => {
  return (
    <div>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Streamity
          </Typography>
        </Toolbar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: styles.Drawer }} //Need to use Paper here instead of root for the drawer.
      >
        <div>
          <IconButton onClick={handleDrawerClose} disableRipple={true} edge="end">
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={styles.SearchBox}>
          <TextField 
          label="Search" 
          InputProps={{
            endAdornment: <SearchIcon/>
          }} />
        </div>
        <List>
          <Typography>
              YEET
          </Typography>
        </List>
        <Divider />
        <Typography>
              YEET BUT 2
          </Typography>
      </Drawer>
    </div>
  );
};

LeftDrawer.defaultProps = {
    open: false,
    handleDrawerClose: () => {},
    handleDrawerOpen: () => {}
};

LeftDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
  handleDrawerOpen: PropTypes.func,
};

export default LeftDrawer;