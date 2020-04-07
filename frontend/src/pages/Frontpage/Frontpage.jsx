import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { Container, Typography } from "@material-ui/core";

import styles from "./frontpage.module.css";
import CardButton from "../../components/CardButton";

const Frontpage = ({ handleClick }) => {
  return (
    <div className={styles.backgroundContainer}>
      <Container maxWidth="sm" classes={{ root: styles.pageContainer }}>
        <div className={styles.textBox}>
          <Typography variant="h1" classes={{ root: styles.title }}>
            Streamity
          </Typography>
          <Typography variant="h4" classes={{ root: styles.slogan }}>
            Create. Join. Stream.
          </Typography>
        </div>
        <div className={styles.buttonBox}>
          <CardButton
            handleClick={handleClick}
            label="Create a party"
            icon={<AddIcon classes={{ root: styles.icon }} />}
          />
          <CardButton
            handleClick={handleClick}
            label="Join a party"
            icon={<PeopleAltIcon classes={{ root: styles.icon }} />}
          />
        </div>
      </Container>
    </div>
  );
};

Frontpage.defaultProps = {
  handleClick: () => {},
};

Frontpage.propTypes = {
  handleClick: PropTypes.func,
};

export default Frontpage;
