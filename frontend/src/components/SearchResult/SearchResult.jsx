import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from "./searchresult.module.css";

const SearchResult = ({ label, imageLabel }) => {
  return (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
            <AccountCircleIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={label}/>
    </ListItem>
  );
};

SearchResult.defaultProps = {
  handleClick: () => {},
  label: "",
  imageLabel: "",
};

SearchResult.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
  imageLabel: PropTypes.string,
};

export default SearchResult;
