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

const LeftDrawer = ({ handleClick, listOfSearchResults }) => {
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: styles.Drawer }} //Need to use Paper here instead of root for the drawer.
      >
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
    handleClick: () => {},
};

LeftDrawer.propTypes = {
  handleClick: PropTypes.func,
};

export default LeftDrawer;