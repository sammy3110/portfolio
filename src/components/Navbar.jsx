import React, { useRef, useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const nav_bar = useRef();
  const social = useRef();
  const logo = useRef();
  const [cross, setCross] = useState(false);

  function toggleNav() {
    nav_bar.current.classList.toggle("active");
    social.current.classList.toggle("active");
    logo.current.classList.toggle("logo-margin");
    setCross((pre) => !pre);
  }

  return (
    <div className="navbar-container">
      <a ref={logo} href="index.html" className="logo">
        <h3>Shyam Sudra</h3>
        <img src="images/astronaut.png" alt="astraunaut" />
      </a>
      <div onClick={toggleNav} className="ham-burger">
        <i className={"fa-solid fa-" + (cross ? "xmark" : "bars")}></i>
      </div>
      <nav ref={nav_bar}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
      </nav>
      <div ref={social} className="social">
        <a href="#medium">
          <i className="fa-brands fa-medium"></i>
        </a>

        <a href="#linkedin">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="#twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>

        <a href="#github">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
