import React from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function Nav() {
  return (
    <header className="flex-row px-1">
  <h2>
    <a  data-testid="link" href="/">
       JasonAhmed
    </a>
  </h2>
  <nav>
    <ul className="flex-row nav nav-tabs">
      <li className="mx-2">
        <a data-testid="about" href="#about">
          About me
        </a>
      </li>
      <li className="mx-2">
        <a href="#project">
          Portfolio
        </a>
      </li>
      <li className="mx-2">
        <a href="#contact">
        Contact
        </a>
      </li>
      <li className="mx-2">
        <a href="#resume">
          Resume
        </a>
      </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;