import React from "react";

const ErrorpageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const handleClick = async () => {
    console.log("handleChange");
    // const response = await getCall();
    // console.log(response);
  };

  const newProps = { handleClick };

  return React.cloneElement(children, { ...newProps });
};

export default ErrorpageContainer;
