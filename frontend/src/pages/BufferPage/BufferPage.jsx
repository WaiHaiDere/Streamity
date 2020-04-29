import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgress, Typography
} from "@material-ui/core";

import styles from "./bufferpage.module.css";

const BufferPage = ({ isLoading, setLoading }) => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.titleContainer}>
        <Typography variant="h4" classes={{ root: styles.title }}>
            Please wait...
        </Typography>
      </div>
      <div className={styles.circleProgressContainer}>
        <CircularProgress color="secondary" classes={{ root: styles.CircularProgress}} />
      </div>
    </div>
  );
};

BufferPage.defaultProps = {
  isloading: true,
  setLoading: () => {},
};

BufferPage.propTypes = {
  isloading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default BufferPage;
