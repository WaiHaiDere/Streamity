import React from "react";
import PropTypes from "prop-types";
import "../../App.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import styles from './cardButton.module.css';

const CardButton = ({ handleClick, label, icon }) => {
  return (
      <div>
      <Card classes={{root: styles.card}}>
        <CardActionArea classes={{root: styles.card}} handleClick={handleClick}>
          <CardContent>
            {icon}
            <Typography color="textPrimary" gutterBottom>
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
  );
};

CardButton.defaultProps = {
  handleChange: () => {},
};

CardButton.propTypes = {
  handleChange: PropTypes.func,
};

export default CardButton;
