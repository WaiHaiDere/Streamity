import React, { useEffect } from "react";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";
import keys from "../hooks/GlobalState/keys";

const FrontpageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const {
    getGlobalState,
    existsInGlobalState,
    putGlobalState,
  } = useGlobalState();

  const test = {
    hi: "there",
    this: "istest",
  };

  useEffect(() => {
    if (existsInGlobalState(keys.SESSION)) {
      console.log(getGlobalState(keys.SESSION));
    } else {
      putGlobalState({ key: keys.SESSION, value: test });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async () => {
    console.log("handleChange");
    // const response = await getCall();
    // console.log(response);
  };

  const newProps = { handleClick };

  return React.cloneElement(children, { ...newProps });
};

export default FrontpageContainer;
