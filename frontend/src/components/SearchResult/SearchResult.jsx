import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import styles from "./searchresult.module.css";

const SearchResult = ({ title, artist }) => {
  return (
    <ListItem> 
      <ListItemAvatar>
        <Avatar>
          <MusicNoteIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} />
      <ListItemText primary={artist} />
    </ListItem>
  );
};

SearchResult.defaultProps = {
  title: "",
  artist: "",
};

SearchResult.propTypes = {
  title: PropTypes.string,
  artist: "",
};

export default SearchResult;
