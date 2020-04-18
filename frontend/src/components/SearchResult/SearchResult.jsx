import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// import styles from "./searchresult.module.css";

const SearchResult = ({ title, artist }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon />
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
