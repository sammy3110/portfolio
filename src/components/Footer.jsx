import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div id="contact" className="footer-container wrapper">
      <div className="footer-top">
        <div className="top-info">
          <div className="top-title">
            <img src="images/logo.png" alt="logo" />
            <h2>hyam</h2>
          </div>
          <p>Web designer and front-end developer based in India.</p>
        </div>
        <div className="top-email">
          <h4>Mail me here.</h4>
          <div className="icon" >
            <i class="fa-regular fa-envelope"></i>
            <a href="mailto:sudrask.31@gmail.com">sudrask.31@gmail.com</a>
          </div>
          <h4>Message me here.</h4>
          <div className="icon" >
            <i class="fa-brands fa-whatsapp"></i>
            <p>+91 9974444057</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2022. Made by Shyam.</p>
      </div>
    </div>
  );
};

export default Footer;
