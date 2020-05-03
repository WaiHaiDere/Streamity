import React, { useState } from "react";

import { getPin } from "../services/creationService";

const MediaselectionpageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const [details, setDetails] = useState({ username: "" });
  const [page, setPage] = useState(0);
  const [pin, setPin] = useState("000000");
  const [disable, setDisable] = useState({ username: true });

  const buttonDisable = (newDetails, name) => {
    const newDisable = { ...disable };

    if (name === "username") {
      if (newDetails.username.length > 0) {
        newDisable.username = false;
      } else {
        newDisable.username = true;
      }
    }
    setDisable(newDisable);
  };

  const handleClick = async () => {
    if (page < children.length - 1) {
      if (page === 1) {
        const response = await getPin(details.username);
        console.log(details.username);
        setPin(response.pin);
      } 
      setPage(page + 1);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newDetails = { ...details };
    newDetails[name] = value;
    setDetails(newDetails);

    buttonDisable(newDetails, name);
  };

  const newProps = { handleClick, handleChange, pin, details, disable };

  return React.cloneElement(children[page], { ...newProps });
};

export default MediaselectionpageContainer;
