import React, { useState } from "react";

const JoinPageContainer = ({ children }) => {
  const [page, setPage] = useState(0);
  const [details, setDetails] = useState({
    pin: "",
    username: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newDetails = { ...details };
    newDetails[name] = value;
    setDetails(newDetails);
  };

  const handleClick = () => {
    if (page < children.length - 1) {
      if (page === 0) {
        if (details.pin.length !== 6) {
          return;
        }
      }
      setPage(page + 1);
    }
    console.log(details);
  };

  const newProps = { handleChange, handleClick, details };

  return React.cloneElement(children[page], { ...newProps });
};

export default JoinPageContainer;
