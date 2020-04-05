import React from "react";

const MediaselectionpageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const handleClick = () => {
    console.log("handleChange");
  };

  const newProps = { handleClick };

  return React.cloneElement(children, { ...newProps });
};

export default MediaselectionpageContainer;
