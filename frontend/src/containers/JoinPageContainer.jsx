import React, { useState } from "react";

const JoinPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [details, setDetails] = useState({
    pin: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newDetails = { ...details };
    newDetails[name] = value;
    setDetails(newDetails);
  };

  const handleClick = () => {
    if (details.pin.length === 6) {
      console.log(details);
    }
  };

  const newProps = { handleChange, handleClick, details };

  return React.cloneElement(children, { ...newProps });
};

export default JoinPageContainer;
