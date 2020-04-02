import React from "react";
import PropTypes from "prop-types";
import logo from "../../logo.svg";
import "../../App.css";

const Frontpage = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

Frontpage.defaultProps = {
  handleChange: () => {},
};

Frontpage.propTypes = {
  handleChange: PropTypes.func,
};

export default Frontpage;
