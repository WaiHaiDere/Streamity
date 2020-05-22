import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loadingData from "./loadinganimation.json";

import styles from "./bufferpage.module.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const BufferPage = () => {
  return (
    <div className={styles.backgroundContainer}>
      <FadeIn>
        <div className="styles.centreContainer">
          <div className={styles.loadingContainer}>
            <h1 className={styles.title}>Redirecting</h1>
            <div className={styles.loadingGap} />
            <Lottie options={defaultOptions} height={240} width={240} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default BufferPage;
