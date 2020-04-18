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

const CardButton = ({ handleClick, label, icon, linkTo }) => {
  return (
    <Card classes={{ root: styles.card }}>
      <CardActionArea classes={{ root: styles.card }} onClick={handleClick}>
        <Link to={linkTo} style={{ textDecoration: "none", color: "none" }}>
          <CardContent classes={{ root: styles.cardContent }}>
            {icon}
            <Typography gutterBottom classes={{ root: styles.buttonText }}>
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
};

CardButton.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
  linkTo: PropTypes.string,
};

export default CardButton;
