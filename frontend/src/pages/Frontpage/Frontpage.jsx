import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Container } from "@material-ui/core";

import styles from "./frontpage.module.css";
import CardButton from "../../components/CardButton";

const Frontpage = ({ handleClick }) => {
  return (
    <Container maxWidth="sm" classes={{ root: styles.pageContainer }}>
      Streamity
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
  );
};

Frontpage.defaultProps = {
  handleClick: () => {},
};

Frontpage.propTypes = {
  handleClick: PropTypes.func,
};

export default Frontpage;
