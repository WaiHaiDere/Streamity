import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loadingData from "./loadinganimation.json";

import styles from "./bufferpage.module.css";

const BufferPage = ({ isLoading, setLoading }) => {
  return (
    <div className={styles.backgroundContainer}>
      <FadeIn>
        <div className="styles.centreContainer">
          <div className={styles.loadingContainer}>
            <h1 className={styles.title}>Setting up</h1>
            <div className={styles.loadingGap}></div>
            <Lottie options={defaultOptions} height={240} width={240} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
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
