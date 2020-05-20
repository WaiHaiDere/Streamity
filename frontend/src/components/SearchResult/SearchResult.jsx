import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styles from "./searchresult.module.css";

const SearchResult = ({ title, artist, albumArt }) => {
  return (
    <ListItem classes={{ root: styles.alignItems }}>
      <img src={albumArt} className={styles.searchResultIcon}></img>
      <ListItemText
        classes={{
          root: styles.listItem,
          primary: styles.itemPrimaryText,
          secondary: styles.itemSecondaryText,
        }}
        primary={title}
        secondary={artist}
      />
    </ListItem>
  );
};

SearchResult.defaultProps = {
  title: "",
  artist: "",
  albumArt: "",
};

SearchResult.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  albumArt: PropTypes.string,
};

export default SearchResult;
