import React from 'react';

function Footer() {

  return (
    <footer>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> JasonAhmed
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</footer>
  );
}

export default Footer;