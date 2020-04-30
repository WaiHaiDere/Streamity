import React, { useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";

const initState = {};

export const GlobalStateContext = React.createContext({});

export const useGlobalState = () => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  const putGlobalState = useCallback(
    ({ key, value }) => {
      const newState = { ...globalState };
      newState[key] = value;
      setGlobalState(newState);
    },
    [globalState, setGlobalState]
  );

  const existsInGlobalState = useCallback((key) => !!globalState[key], [
    globalState,
  ]);

  const getGlobalState = useCallback(
    (key) => {
      if (globalState[key]) {
        return { ...globalState[key] };
      }
      return undefined;
    },
    [globalState]
  );

  const removeGlobalState = useCallback(
    (key) => {
      const newState = { ...globalState };
      delete newState[key];
      setGlobalState(newState);
    },
    [globalState, setGlobalState]
  );

  const removeAllGlobalState = useCallback(() => {
    setGlobalState(initState);
  }, [setGlobalState]);

  return {
    putGlobalState,
    getGlobalState,
    removeGlobalState,
    removeAllGlobalState,
    existsInGlobalState,
  };
};

const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initState);

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default GlobalStateProvider;
