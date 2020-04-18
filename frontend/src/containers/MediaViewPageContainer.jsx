import React, { useState } from "react";

const MediaViewPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [listOfSearchResults] = useState(
    // hardcoding this for now
    [
      {
        title: "Ryan",
        artist: "artist1",
      },
      {
        title: "YEET",
        artist: "artist2",
      },
    ]
  );
  const [pin] = useState("123456"); // Hardcoded for now.

  const handleClick = () => {
    console.log("handleChange");
  };

  const newProps = { pin, handleClick, listOfSearchResults };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
