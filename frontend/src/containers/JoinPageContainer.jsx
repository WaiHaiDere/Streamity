import React, { useState } from "react";

const JoinPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [pin, setPin] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setPin(value);
    console.log(value);
  };

  const handleClick = () => {
    console.log(pin);
  };

  const newProps = { handleChange, handleClick };

  return React.cloneElement(children, { ...newProps });
};

export default JoinPageContainer;
