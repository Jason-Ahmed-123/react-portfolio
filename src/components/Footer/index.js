import React from 'react';

function Footer() {

  return (
    <footer>
  <h2>
    <a href="/">Copywrite (To Do: add the proper copywrite symbol): JasonAhmed</a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#contact">
          GitHub [link]
        </a>
      </li>
      <li className="mx-2">
        <a href="#contact">
          LinkedIn [link]
        </a>
      </li>
      <li className="mx-2">
        <a href="#contact">
          Butterfly Stampede [link]
        </a>
      </li>
    </ul>
  </nav>
</footer>
  );
}

export default Footer;