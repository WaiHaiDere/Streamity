import React from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  IconButton,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SendIcon from "@material-ui/icons/Send";

import PropTypes from "prop-types";
import styles from "../RightDrawer/rightdrawer.module.css";

import { Avatar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const RightDrawer = ({ handlclick, pin }) => {
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
        <div />
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
  handleClick: () => {},
};

RightDrawer.propTypes = {
  handleClick: PropTypes.func,
};

export default RightDrawer;
