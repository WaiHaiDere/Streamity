import React from 'react';
import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import PropTypes from 'prop-types';
import styles from '../RightDrawer/rightdrawer.module.css';

const RightDrawer = ({handlclick, pin}) => {
  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
          paper: styles.Drawer
        }}
        anchor="right"
      >
        <div className={styles.DrawerHeader}>
           <Typography variant='h4'>
               PIN #{pin}
           </Typography>
        </div>
        <div/>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

RightDrawer.defaultProps = {
    handleClick: () => {}
};

RightDrawer.propTypes = {
    handleClick: PropTypes.func,
};

export default RightDrawer;