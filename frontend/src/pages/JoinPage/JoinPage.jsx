import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, TextField, Button } from "@material-ui/core";

import { isAllowedNumericInput } from "../../common/helpers";
import styles from "./JoinPage.module.css";

const JoinPage = ({ handleChange, handleClick, details, disable }) => {
  const checkIsNumber = (event) => {
    const val = event.target.value;

    if (isAllowedNumericInput(val)) {
      handleChange(event);
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
              name="pin"
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
              value={details.pin}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              inputProps={{ maxLength: 6 }}
            />
          </div>
          <Button
            variant="contained"
            disabled={disable.pin}
            onClick={handleClick}
            classes={{
              root: styles.nextButton,
              label: styles.buttonLabel,
              disabled: styles.disabled,
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
  details: { pin: "" },
  disable: { pin: true },
};

JoinPage.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  details: PropTypes.objectOf(PropTypes.string),
  disable: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
  ),
};

export default JoinPage;
