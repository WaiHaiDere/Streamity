import React, { useEffect } from "react";

import { getCall } from "../services/creationService";

const FrontpageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  useEffect(() => {
    async function getPostsOnLoad() {
      // const response = await getCall();
      // console.log(response);
    }

    getPostsOnLoad();
  }, []);
  const handleClick = async () => {
    // console.log("handleChange");
    const response = await getCall();
    console.log(response);
  };

  const newProps = { handleClick };

  return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;
