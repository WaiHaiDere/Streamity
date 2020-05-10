import React from "react";
import { TextField, Drawer, List, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import SearchResult from "../SearchResult/SearchResult";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
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
          <FormControl>
            <InputLabel
              htmlFor="search-input"
              classes={{
                root: styles.searchColour,
              }}
            >
              Search
            </InputLabel>
            <Input
              id="search-input"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="send chat message"
                    classes={{
                      root: styles.searchColour,
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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
