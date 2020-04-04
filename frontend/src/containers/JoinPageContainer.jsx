import React, { useState } from "react";

const JoinPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [pin, setPin] = useState("");

  const handleChange = (value) => {
    setPin(value);
  };

  const handleClick = () => {
    if (pin.length === 6) {
      console.log(pin);
    }
  };

  const newProps = { handleChange, handleClick, pin };

  return React.cloneElement(children, { ...newProps });
};

export default JoinPageContainer;
