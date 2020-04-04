import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, TextField, Button } from "@material-ui/core";

import styles from "./JoinPage.module.css";

const JoinPage = ({ handleChange, handleClick }) => {
  return (
    <div className={styles.backgroundContainer}>
      <Container maxWidth="sm" classes={{ root: styles.pageContainer }}>
        <div className={styles.textBox}>
          <Typography variant="h1" classes={{ root: styles.title }}>
            Streamity
          </Typography>

          <Typography variant="h4" classes={{ root: styles.slogan }}>
            Looking to join a party?
          </Typography>

          <div className={styles.textFieldBox}>
            <TextField
              onChange={handleChange}
              placeholder="Party PIN"
              classes={{ root: styles.textField }}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: styles.inputRoot,
                  input: styles.inputText,
                  underline: styles.inputUnderline,
                },
              }}
            />
          </div>
          <Button onClick={handleClick} />
        </div>
      </Container>
    </div>
  );
};

JoinPage.defaultProps = {
  handleChange: () => {},
  handleClick: () => {},
};

JoinPage.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default JoinPage;
