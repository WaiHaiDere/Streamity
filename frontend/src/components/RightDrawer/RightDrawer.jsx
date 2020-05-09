import React from "react";
import { Drawer, List, Typography, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import PropTypes from "prop-types";
import styles from "../RightDrawer/rightdrawer.module.css";
import { Avatar } from "@material-ui/core";
import ChatMessage from "../ChatMessage/ChatMessage";

const RightDrawer = ({ chatMessages, pin, details }) => {
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
  details: { username: "" },
};

RightDrawer.propTypes = {
  chatMessages: PropTypes.objectOf(PropTypes.string),
  details: PropTypes.objectOf(PropTypes.string),
};

export default RightDrawer;
