import React from "react";
import { Drawer, List, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchResult from "../SearchResult/SearchResult";
import styles from "./leftdrawer.module.css";
import AddIcon from "@material-ui/icons/Add";

const LeftDrawer = ({
  listOfSearchResults,
  handleChange,
  handleClickSearch,
  addToPlaylist,
}) => {
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
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="send search"
                    classes={{
                      root: styles.searchColour,
                    }}
                    onClick={handleClickSearch}
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
              <>
              <div className={styles.SearchResult}>
                <SearchResult
                  key={searchResult.trackUri}
                  title={searchResult.songName}
                  artist={searchResult.artist[0].name}
                  albumArt={searchResult.album.images[0].url}
                />
                <IconButton
                  key={`${searchResult.trackUri}-add`}
                  onClick={() => {
                    addToPlaylist(searchResult);
                  }}
                >
                  <AddIcon />
                </IconButton>
                </div>
              </>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

LeftDrawer.defaultProps = {
  listOfSearchResults: [{}],
  handleChange: () => {},
  handleClickSearch: () => {},
  addToPlaylist: () => {},
};

LeftDrawer.propTypes = {
  listOfSearchResults: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleClickSearch: PropTypes.func,
  addToPlaylist: PropTypes.func,
};

export default LeftDrawer;
