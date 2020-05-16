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

const RightDrawer = ({
  chatMessageList,
  pin,
  details,
  handleChatChange,
  handleClickSend,
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
          <Avatar classes={{ root: styles.avatar }}>
            {details.username.charAt(0)}
          </Avatar>
        </div>
        <List classes={{ root: styles.chatMessageList }}>
          {chatMessageList.map((chatMessage) => {
            return (
              <div
                className={styles.ChatMessagesContainer}
                key={`${chatMessage.user}-${chatMessage.message}`}
              >
                <ChatMessage
                  user={chatMessage.user}
                  message={chatMessage.message}
                />
              </div>
            );
          })}
        </List>
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
};

RightDrawer.propTypes = {
  chatMessageList: PropTypes.arrayOf(PropTypes.object),
  details: PropTypes.objectOf(PropTypes.string),
  pin: PropTypes.string,
  handleChatChange: PropTypes.func,
  handleClickSend: PropTypes.func,
};

export default RightDrawer;
