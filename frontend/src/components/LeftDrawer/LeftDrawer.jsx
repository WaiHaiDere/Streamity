import React from "react";
import { Drawer, List, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchResult from "../SearchResult/SearchResult";
import styles from "./leftdrawer.module.css";

const LeftDrawer = ({ listOfSearchResults, handleChange, handleClickSearch }) => {
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
            return(
                <>
                <SearchResult
                  key={searchResult.trackUri}
                  title={searchResult.songName}
                  artist={searchResult.artist[0].name}
                  classes={{ root: styles.SearchResult }}
                />
                <IconButton>
                  <AddIcon />
                </IconButton>
                </>
            )
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
};

LeftDrawer.propTypes = {  
  listOfSearchResults: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleClickSearch: PropTypes.func,
};

export default LeftDrawer;
