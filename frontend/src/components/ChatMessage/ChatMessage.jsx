import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import styles from "./chatmessage.module.css";

const ChatMessage = ({ user, message }) => {
  return (
    <ListItem alignItems="flex-start"> 
      <ListItemAvatar>
        <Avatar>
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
  message: "",
};

export default ChatMessage;
