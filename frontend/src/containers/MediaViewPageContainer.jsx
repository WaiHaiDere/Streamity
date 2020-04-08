import React, { useState } from "react";

const MediaViewPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [open, setOpen] = useState(false);
  const [listOfSearchResults, setListofSearchResults] = useState( // hardcoding this for now
    [
      {
        label: "Ryan",
        imageLabel: ""
      },
      {
        label: "YEET",
        imageLabel: ""
      },
    ]
  )
  const [pin, setPin] = useState( "123456") //Hardcoded for now.


  const handleClick = () => {
    console.log("handleChange");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const newProps = { pin, handleClick, handleDrawerOpen, handleDrawerClose, open, listOfSearchResults };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;