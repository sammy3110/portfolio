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
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div ref={social} className="social">
        <a target={"_blank"} href="https://medium.com/@sudra_shyam">
          <i className="fa-brands fa-medium"></i>
        </a>

        <a target={"_blank"} href="https://www.linkedin.com/in/shyam-sudra-7a052277/">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a target={"_blank"} href="https://twitter.com/shyamsudra5">
          <i className="fa-brands fa-twitter"></i>
        </a>

        <a target={"_blank"} href="https://github.com/sammy3110">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
