import React, { useState } from "react";

const MediaselectionpageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const [page, setPage] = useState(0);

  const handleClick = () => {
    if (page < children.length - 1) {
      setPage(page + 1);
    }
  };

  const newProps = { handleClick };

  return React.cloneElement(children[page], { ...newProps });
};

export default MediaselectionpageContainer;
