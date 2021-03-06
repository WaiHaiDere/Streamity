/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import styles from "./chatmessage.module.css";

const ChatMessage = ({ user, message }) => {
  const avatarColour = (username) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += `00${value.toString(16)}`.substr(-2);
    }
    return colour;
  };
  return (
    <ListItem classes={{ root: styles.alignItems }}>
      <ListItemAvatar>
        <Avatar style={{ backgroundColor: avatarColour(user) }}>
          {user.charAt(0)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={user} secondary={message} />
    </ListItem>
  );
};

ChatMessage.defaultProps = {
  user: "",
  message: "",
};

ChatMessage.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
};

export default ChatMessage;
