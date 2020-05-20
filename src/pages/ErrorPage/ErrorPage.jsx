import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-fade-in";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import styles from "./errorpage.module.css";

const ErrorPage = ({}) => {
  return (
    <div className={styles.backgroundContainer}>
      <FadeIn>
        <div className="styles.centreContainer">
          <div className={styles.errorContainer}>
            <SentimentVeryDissatisfiedIcon classes={{ root: styles.icon }} />
            <div className={styles.gap}></div>
            <h1 className={styles.title}>Oops!</h1>
          </div>
        </div>
        <h3 className={styles.error}>
          We can't seem to find the page you're looking for.
        </h3>
      </FadeIn>
    </div>
  );
};

ErrorPage.defaultProps = {};

ErrorPage.propTypes = {};

export default ErrorPage;
