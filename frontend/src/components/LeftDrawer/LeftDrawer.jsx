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
import AddIcon from '@material-ui/icons/Add';

import SearchResult from '../../components/SearchResult/SearchResult';

import styles from "./leftdrawer.module.css";

const LeftDrawer = ({ open, handleDrawerClose, handleDrawerOpen, handleClick, listOfSearchResults }) => {
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
          {listOfSearchResults.map(searchResult => {
            return (
              <div className={ styles.SearchResultContainer }>
                <SearchResult label={searchResult.label} classes={{ root: styles.SearchResult}}/>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>
            )
          })}
        </List>
      </Drawer>
    </div>
  );
};

LeftDrawer.defaultProps = {
    open: false,
    handleDrawerClose: () => {},
    handleDrawerOpen: () => {},
    handleClick: () => {},
};

LeftDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
  handleDrawerOpen: PropTypes.func,
  handleClick: PropTypes.func,
};

export default LeftDrawer;