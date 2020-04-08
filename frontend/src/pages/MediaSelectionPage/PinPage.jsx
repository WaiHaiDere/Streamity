import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Button, Card, CardContent, CardActions, Grid } from "@material-ui/core";

import styles from "./mediaselectionpage.module.css";

const PinPage = ({ handleClick }) => {
  return (
    <div className={styles.backgroundContainer}>
      <Container maxWidth="sm" classes={{ root: styles.pageContainer }}>
        <div className={styles.textBox}>
          <Typography variant="h1" classes={{ root: styles.title }}>
            Streamity
          </Typography>

          <Typography variant="h4" classes={{ root: styles.slogan }}>
            Share your pin with friends to start the party!
          </Typography>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center">
          <Card classes = { {root: styles.pinCard}}>
             <CardContent>
             <Typography variant="h2" classes={{ root: styles.title }}>
            PIN: #007
          </Typography>
        </CardContent>
        <CardActions classes = { {root: styles.cardActions}}>
        <Button size="small" onClick={handleClick} classes={{
              root: styles.copyButtonAlign,
              label: styles.copyButton,
            }}>Copy</Button>
      </CardActions>
          </Card>
          </Grid>
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

PinPage.defaultProps = {
  handleClick: () => {},
};

PinPage.propTypes = {
  handleClick: PropTypes.func,
};

export default PinPage;
