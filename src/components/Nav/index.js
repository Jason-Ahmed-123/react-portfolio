import React from 'react';

function Nav() {

    // const categories = [
    //     {
    //       name: "commercial",
    //       description:
    //         "Photos of grocery stores, food trucks, and other commercial projects",
    //     },
    //     { name: "portraits", description: "Portraits of people in my life" },
    //     { name: "food", description: "Delicious delicacies" },
    //     {
    //       name: "landscape",
    //       description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    //     },
    //   ];  

  return (
    <header className="flex-row px-1">
  <h2>
    <a  data-testid="link" href="/">
      <span role="img" aria-label="camera"> 📸</span> JasonAhmed
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a data-testid="about" href="#about">
          About me
        </a>
      </li>
      <li className="mx-2">
        <a href="#portfolio">
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