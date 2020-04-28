import React, { useState, useEffect } from "react";

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
  const [authCode, setAuthCode] = useState();

  const handleClick = () => {
    console.log("handleChange");
  };

  useEffect(() => {
    getParameterByName("code");
    console.log(authCode);
  });

  // Adapted from: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=1&tab=votes#tab-top
  // This extracts the params from the URL. 
  const getParameterByName = (name, url) => {
    if (!url) url = window.location.href; // If there is no input param, it finds it from the URL.
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    var authCode = decodeURIComponent(results[2].replace(/\+/g, ' '));
    setAuthCode(authCode);
  };

  const newProps = { pin, handleClick, listOfSearchResults };

  return React.cloneElement(children, { ...newProps });
};

export default MediaViewPageContainer;
