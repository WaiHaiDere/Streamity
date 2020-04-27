import React, { useState } from "react";

import { getRoom } from "../services/mediaSelectionService";

const JoinPageContainer = ({ children }) => {
  const [page, setPage] = useState(0);
  const [disable, setDisable] = useState({ pin: true, username: true });
  const [details, setDetails] = useState({
    pin: "",
    username: "",
  });
  const [error, setError] = useState({
    pin: "",
    username: "",
  });

  const buttonDisable = (newDetails, name) => {
    const newDisable = { ...disable };

    if (name === "pin") {
      if (newDetails.pin.length === 6) {
        newDisable.pin = false;
      } else {
        newDisable.pin = true;
      }
    }

    if (name === "username") {
      if (newDetails.username.length > 0) {
        newDisable.username = false;
      } else {
        newDisable.username = true;
      }
    }
    setDisable(newDisable);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newDetails = { ...details };
    newDetails[name] = value;
    delete error[name];
    setDetails(newDetails);

    buttonDisable(newDetails, name);
  };

  const handleClick = async () => {
    if (page < children.length - 1) {
      if (page === 0) {
        const response = await getRoom(details.pin);
        if (response.error) {
          setError({ ...error, pin: response.error });
          return;
        }
      }
      setPage(page + 1);
    }
    console.log(details);
  };

  const newProps = { handleChange, handleClick, details, disable, error };

  return React.cloneElement(children[page], { ...newProps });
};

export default JoinPageContainer;
