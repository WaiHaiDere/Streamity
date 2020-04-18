import React, { useState } from "react";

import { getPin } from "../services/creationService";

const MediaselectionpageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const [page, setPage] = useState(0);
  const [pin, setPin] = useState("000000");

  const handleClick = async () => {
    if (page < children.length - 1) {
      const response = await getPin();
      setPin(response.pin);
      setPage(page + 1);
    }
  };

  const newProps = { handleClick, pin };

  return React.cloneElement(children[page], { ...newProps });
};

export default MediaselectionpageContainer;
