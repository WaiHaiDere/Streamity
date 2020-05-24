import React, { useState } from "react";
import PropTypes from "prop-types";
import { getRoom } from "../services/mediaSelectionService";
import { joinRoom } from "../services/joinService";
import { useGlobalState } from "../hooks/GlobalState/GlobalStateProvider";
import keys from "../hooks/GlobalState/keys";
import { setPersistentItem } from "../common/persistenceStore";
import { spotifyLoginRoute } from "../services/apiRoutes";

const JoinPageContainer = ({ children }) => {
  const [page, setPage] = useState(0);
  const [disable, setDisable] = useState({ pin: true, username: true });
  const [details, setDetails] = useState({
    pin: "",
    username: "",
  });
  const [error, setError] = useState({
    pin: "",
    username: "",
  });

  const { putGlobalState } = useGlobalState();

  const buttonDisable = (newDetails, name) => {
    const newDisable = { ...disable };

    if (name === "pin") {
      if (newDetails.pin.length === 6) {
        newDisable.pin = false;
      } else {
        newDisable.pin = true;
      }
    }

    if (name === "username") {
      if (newDetails.username.length > 0) {
        newDisable.username = false;
      } else {
        newDisable.username = true;
      }
    }
    setDisable(newDisable);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newDetails = { ...details };
    newDetails[name] = value;
    delete error[name];
    setDetails(newDetails);

    buttonDisable(newDetails, name);
  };

  const handleClick = async () => {
    if (page === 0) {
      const response = await getRoom(details.pin);
      if (response.error) {
        setError({ ...error, pin: response.error });
        return;
      }
    }
    if (page === 1) {
      const sessionDetails = {
        pin: details.pin,
        username: details.username,
      };
      await joinRoom(sessionDetails);

      putGlobalState({ key: keys.SESSION, value: sessionDetails });
      setPersistentItem(keys.SESSION, sessionDetails);
    }
    if (page < children.length - 1) {
      setPage(page + 1);
    }
  };

  const newProps = {
    handleChange,
    handleClick,
    details,
    disable,
    error,
    loginPath: spotifyLoginRoute,
  };

  return <>{React.cloneElement(children[page], { ...newProps })}</>;
};

JoinPageContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default JoinPageContainer;
