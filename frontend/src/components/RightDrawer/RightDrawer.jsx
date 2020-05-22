/* eslint-disable react/no-array-index-key */
/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */
import React from "react";
import { Drawer, List, Typography, Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import styles from "./rightdrawer.module.css";
import ChatMessage from "../ChatMessage/ChatMessage";

function avatarColour(username) {
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
}

const RightDrawer = ({
  chatMessageList,
  pin,
  details,
  handleChatChange,
  handleClickSend,
  chatMessage,
}) => {
  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
          paper: styles.Drawer,
        }}
        anchor="right"
      >
        <div className={styles.DrawerHeader}>
          <div className={styles.headerText}>
            <Typography variant="overline">{details.username}</Typography>
            <Typography variant="h5">PIN #{pin}</Typography>
          </div>
          <Avatar
            style={{ backgroundColor: avatarColour(details.username) }}
            classes={{ root: styles.avatar }}
          >
            {details.username.charAt(0)}
          </Avatar>
        </div>
        <div className={styles.chatMessageScroll}>
          <List>
            {chatMessageList.map((message, idx) => (
              <div className={styles.ChatMessagesContainer} key={idx}>
                <ChatMessage
                  user={chatMessage.user}
                  message={chatMessage.message}
                  key={idx}
                />
              </div>
            ))}
          </List>
        </div>
        <div className={styles.ChatBox}>
          <FormControl>
            <InputLabel
              htmlFor="chat-message"
              classes={{
                root: styles.chatColour,
              }}
            >
              Type your message
            </InputLabel>
            <Input
              value={chatMessage}
              id="chat-message"
              onChange={handleChatChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="send chat message"
                    classes={{
                      root: styles.chatColour,
                    }}
                    onClick={handleClickSend}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </Drawer>
    </div>
  );
};

RightDrawer.defaultProps = {
  chatMessageList: [{}],
  details: { username: "" },
  pin: "",
  handleChatChange: () => {},
  handleClickSend: () => {},
  chatMessage: "",
};

RightDrawer.propTypes = {
  chatMessageList: PropTypes.arrayOf(PropTypes.object),
  details: PropTypes.objectOf(PropTypes.string),
  pin: PropTypes.string,
  handleChatChange: PropTypes.func,
  handleClickSend: PropTypes.func,
  chatMessage: PropTypes.string,
};

export default RightDrawer;
