import React from "react";
import {
  TextField,
  Drawer,
  List,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import SearchResult from "../SearchResult/SearchResult";
import styles from "./leftdrawer.module.css";

const LeftDrawer = ({ listOfSearchResults }) => {
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: styles.Drawer }} // Need to use Paper here instead of root for the drawer.
      >
        <div className={styles.SearchBox}>
          <TextField
            label="Search"
            InputProps={{
              endAdornment: <SearchIcon />,
              classes: {
                root: styles.searchColour,
              },
            }}
            InputLabelProps={{
              classes: {
                root: styles.searchColour,
              },
            }}
          />
        </div>
        <List>
          {listOfSearchResults.map((searchResult) => {
            return (
              <div className={styles.SearchResultContainer}>
                <SearchResult
                  title={searchResult.title}
                  artist={searchResult.artist}
                  classes={{ root: styles.SearchResult }}
                />
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

LeftDrawer.defaultProps = {
  listOfSearchResults: {},
};

LeftDrawer.propTypes = {
  listOfSearchResults: PropTypes.objectOf(PropTypes.string),
};

export default LeftDrawer;
