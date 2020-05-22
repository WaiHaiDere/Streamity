import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import { spotifyLoginRoute } from "../../services/apiRoutes";

import styles from "./mediaselectionpage.module.css";

const handleCopy = async () => {
  navigator.clipboard.writeText(
    document.getElementById("pin").innerHTML.substring(5)
  );
};

const PinPage = ({ handleClick, pin }) => {
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
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Card classes={{ root: styles.pinCard }}>
              <CardContent>
                <Typography
                  variant="h2"
                  classes={{ root: styles.title }}
                  id="pin"
                >
                  PIN: {pin}
                </Typography>
              </CardContent>
              <CardActions classes={{ root: styles.cardActions }}>
                <Button
                  size="small"
                  onClick={handleCopy}
                  classes={{
                    root: styles.copyButtonAlign,
                    label: styles.copyButton,
                  }}
                >
                  Copy
                </Button>
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
            href={spotifyLoginRoute}
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
  pin: "",
};

PinPage.propTypes = {
  handleClick: PropTypes.func,
  pin: PropTypes.string,
};

export default PinPage;
