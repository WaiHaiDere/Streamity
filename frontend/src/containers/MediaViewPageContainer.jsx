import React, { useState } from "react";

const MediaViewPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx
  const [listOfSearchResults, setlistOfSearchResults] = useState(
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
  const [pin, setPin] = useState("123456"); // Hardcoded for now.

  const handleClick = () => {
    console.log("handleChange");
  };

  const [chatMessages, setChatMessages] = useState(
    [
      {
        user: "Mish",
        message: "I love this song!",
      },
      {
        user: "Tyger",
        message: "Agreed",
      },
      {
        user: "Josh",
        message: "Major fan!",
      },
      {
        user: "Ryan",
        message: "Guys have you seen.",
      },
    ]
  );

  const newProps = { pin, handleClick, listOfSearchResults, chatMessages };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
