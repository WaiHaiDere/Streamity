import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

import styles from "./cardButton.module.css";

const CardButton = ({ handleClick, label, icon }) => {
  return (
    <Card classes={{ root: styles.card }}>
      <CardActionArea classes={{ root: styles.card }} onClick={handleClick}>
        <CardContent classes={{ root: styles.cardContent }}>
          {icon}
          <Typography color="textPrimary" gutterBottom>
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardButton.defaultProps = {
  handleClick: () => {},
  label: "",
  icon: null,
};

CardButton.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
};

export default CardButton;
