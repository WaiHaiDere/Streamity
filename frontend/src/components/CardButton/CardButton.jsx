import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

import styles from "./cardButton.module.css";

const CardButton = ({ handleClick, label, icon, linkTo, disabled }) => {
  let cardClass = styles.card;
  let buttonClass = styles.buttonText;
  if (disabled) {
    cardClass += ` ${styles.disabled}`;
    buttonClass += ` ${styles.disabled}`;
  }
  return (
    <Card classes={{ root: cardClass }}>
      <CardActionArea
        classes={{ root: styles.card }}
        onClick={handleClick}
        disabled={disabled}
      >
        <Link to={linkTo} style={{ textDecoration: "none", color: "none" }}>
          <CardContent classes={{ root: styles.cardContent }}>
            {icon}
            <Typography gutterBottom classes={{ root: buttonClass }}>
              {label}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

CardButton.defaultProps = {
  handleClick: () => {},
  label: "",
  icon: null,
  linkTo: "",
  disabled: false,
};

CardButton.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
  linkTo: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CardButton;
