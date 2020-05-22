import React from "react";
import PropTypes from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { StepConnector } from "@material-ui/core";

import styles from "./AddressSummary.module.css";

const AddressSummary = ({ details, handlePageChange, page }) => {
  const smallIcon = () => {
    return <Brightness1Icon className={styles.smallButton} />;
  };

  const bigIcon = () => {
    return <Brightness1Icon className={styles.bigButton} />;
  };

  return (
    <div className={styles.content}>
      <Stepper
        orientation="vertical"
        activeStep={0}
        connector={
          <StepConnector
            classes={{
              vertical: styles.lineVertical,
              line: styles.connectorLine,
            }}
          />
        }
        classes={{
          root: styles.stepperRoot,
        }}
      >
        <Step active>
          <StepLabel
            StepIconComponent={bigIcon}
            classes={{
              iconContainer: styles.iconContainer,
            }}
          >
            <div className={styles.heading}>
              From
              <button
                id="edit-button"
                type="button"
                className={styles.editButton}
                onClick={() => handlePageChange(page)}
              >
                Edit
              </button>
            </div>
          </StepLabel>
          <StepContent
            id="from-address"
            classes={{
              root: styles.contentRoot,
            }}
          >
            {details.fromAddress}
          </StepContent>
        </Step>
        <Step active>
          <StepLabel
            StepIconComponent={smallIcon}
            classes={{
              iconContainer: styles.iconContainer,
            }}
          >
            <div className={styles.headingTo}>To</div>
          </StepLabel>
          <StepContent
            classes={{
              root: styles.deliveryAddressContent,
            }}
          >
            <Typography
              classes={{ root: styles.deliveryAddress }}
              id="to-address"
            >
              Hello
            </Typography>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
};

AddressSummary.defaultProps = {
  details: {
    fromAddress: "",
    isDomestic: true,
    deliveryAddress: {
      name: "",
      organisation: "",
      sortingCode: "",
      streetAddress: "",
      district: "",
      city: "",
      state: "",
      zip: "",
      country: "New Zealand",
      i18nDetails: {
        fmt: "",
        lfmt: "",
      },
      domesticAddress: "",
    },
  },
  handlePageChange: () => {},
  page: 0,
};

AddressSummary.propTypes = {
  details: PropTypes.shape({
    fromAddress: PropTypes.string,
    recipientCountry: PropTypes.string,
    isDomestic: PropTypes.bool,
    deliveryAddress: PropTypes.shape({
      country: PropTypes.string,
      name: PropTypes.string,
      organisation: PropTypes.string,
      streetAddress: PropTypes.string,
      district: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      sortingCode: PropTypes.string,
      domesticAddress: PropTypes.string,
      i18nDetails: PropTypes.shape({
        fmt: PropTypes.string,
        lfmt: PropTypes.string,
      }),
    }),
  }),
  handlePageChange: PropTypes.func,
  page: PropTypes.number,
};

export default AddressSummary;
