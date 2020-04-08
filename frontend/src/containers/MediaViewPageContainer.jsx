import React, { useState } from "react";

const MediaViewPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("handleChange");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const newProps = { handleClick, handleDrawerOpen, handleDrawerClose, open };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;