import React from "react";
import brandLogo from "../../assets/images/logo.png";
import fbIcon from "../../assets/icons/Facebook.png";
import linkedInIcon from "../../assets/icons/LinkedIn .png";
import instagramIcon from "../../assets/icons/Instagram.png";
import twitterIcon from "../../assets/icons/Twitter.png";

const Footer = () => {
  return (
    <div>
      <div className="footer mt-5">
        <img src={brandLogo} alt="" />
        <ul className="footer-link">
          <li>Home</li>
          <li>About me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <ul className="footer-link">
          <li>
            <img src={fbIcon} alt="" className="icon-image" />
          </li>
          <li>
            <img src={linkedInIcon} alt="" className="icon-image" />
          </li>
          <li>
            <img src={instagramIcon} alt="" className="icon-image" />
          </li>
          <li>
            <img src={twitterIcon} alt="" className="icon-image" />
          </li>
        </ul>
      </div>
      <div className="copyright">
        &copy; 2023 <span className="text-warning">Mumair</span> All rights
        reserved, Inc.
      </div>
    </div>
  );
};

export default Footer;
