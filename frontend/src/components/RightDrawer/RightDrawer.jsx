import React from "react";
import { Drawer, List, Typography, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import PropTypes from "prop-types";
import styles from "../RightDrawer/rightdrawer.module.css";
import { Avatar } from "@material-ui/core";
import ChatMessage from "../ChatMessage/ChatMessage";

const RightDrawer = ({ chatMessages, pin }) => {
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
          <Typography variant="h5">PIN #{pin}</Typography>
          <Avatar className={styles.avatar}>M</Avatar>
        </div>
        <List className={styles.chatMessageList}>
          {chatMessages.map((chatMessage) => {
            return (
              <div className={styles.ChatMessagesContainer}>
                <ChatMessage
                  user={chatMessage.user}
                  message={chatMessage.message}
                />
              </div>
            );
          })}
        </List>
        <div className={styles.ChatBox}>
          <TextField
            label="Type your message"
            InputProps={{
              endAdornment: <SendIcon />,
              classes: {
                root: styles.chatColour,
              },
            }}
            InputLabelProps={{
              classes: {
                root: styles.chatColour,
              },
            }}
          />
        </div>
      </Drawer>
    </div>
  );
};

RightDrawer.defaultProps = {
  chatMessages: {},
};

RightDrawer.propTypes = {
  chatMessages: PropTypes.objectOf(PropTypes.string),
};

export default RightDrawer;
