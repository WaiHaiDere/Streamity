import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, TextField, Button } from "@material-ui/core";

import { isAllowedNumericInput } from "../../common/helpers";
import styles from "./JoinPage.module.css";

const JoinPage = ({ handleChange, handleClick, pin }) => {
  const checkIsNumber = (event) => {
    const val = event.target.value;

    if (isAllowedNumericInput(val)) {
      handleChange(val);
    }
  };

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
              onChange={checkIsNumber}
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
              value={pin}
              maxLength="6"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              inputProps={{ maxLength: 6 }}
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
            NEXT
          </Button>
        </div>
      </Container>
    </div>
  );
};

JoinPage.defaultProps = {
  handleChange: () => {},
  handleClick: () => {},
  pin: "",
};

JoinPage.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  pin: PropTypes.string,
};

export default JoinPage;
