import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, TextField, Button } from "@material-ui/core";

import styles from "./JoinPage.module.css";

const JoinPage = ({ handleChange, handleClick, details }) => {
  return (
    <div className={styles.backgroundContainer}>
      <Container maxWidth="sm" classes={{ root: styles.pageContainer }}>
        <div className={styles.textBox}>
          <Typography variant="h1" classes={{ root: styles.title }}>
            Streamity
          </Typography>

          <Typography variant="h4" classes={{ root: styles.slogan }}>
            What is your name?
          </Typography>

          <div className={styles.textFieldBox}>
            <TextField
              name="username"
              onChange={handleChange}
              placeholder="Username"
              classes={{ root: styles.textField }}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: styles.inputRoot,
                  input: styles.inputText,
                  underline: styles.inputUnderline,
                },
              }}
              value={details.username}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              inputProps={{ maxLength: 12 }}
            />
          </div>
          <Button
            variant="contained"
            onClick={handleClick}
            classes={{
              root: styles.nextButton,
              label: styles.buttonLabel,
            }}
          >
            JOIN THE PARTY
          </Button>
        </div>
      </Container>
    </div>
  );
};

JoinPage.defaultProps = {
  handleChange: () => {},
  handleClick: () => {},
  details: { username: "" },
};

JoinPage.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  details: PropTypes.objectOf(PropTypes.string),
};

export default JoinPage;
