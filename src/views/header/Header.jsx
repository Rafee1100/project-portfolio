import React from "react";
import introImage from "../../assets/images/banner-image.png";
import rectangleImage from "../../assets/images/rectangle.png";
import fbIcon from "../../assets/icons/Facebook.png";
import linkedInIcon from "../../assets/icons/LinkedIn .png";
import instagramIcon from "../../assets/icons/Instagram.png";
import twitterIcon from "../../assets/icons/Twitter.png";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div className="container intro">
      <Row>
        <Col className="intro-section">
          <h6>Hi I am</h6>
          <h5 className="text-warning">Muhammad Umair</h5>
          <h1>UI & UX</h1>
          <h1 className="designer-headline">Designer</h1>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <button className="btn-hire-me">Hire me</button>
        </Col>
        <Col className="intro-image">
          <img src={rectangleImage} alt="" className="rect-img" />
          <img src={introImage} alt="" className="person-image" />
          <div className="d-flex justify-content-center mt-4">
            <img src={fbIcon} alt=""  className="icon-image" />
            <img src={linkedInIcon} alt="" className="icon-image" />
            <img src={instagramIcon} alt="" className="icon-image" />
            <img src={twitterIcon} alt="" className="icon-image" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
