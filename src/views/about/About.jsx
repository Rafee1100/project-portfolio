import React from "react";
import aboutMeImage from "../../assets/images/about-img.png";
import rectangleImage from "../../assets/images/rectangle.png";
import { Col, Row } from "react-bootstrap";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const About = () => {
  return (
    <div className="container about-me">
      <Row>
        <Col className="about-image">
          <img src={aboutMeImage} alt="" className="person-image" />
          <img src={rectangleImage} alt="" className="rect-img" />
        </Col>
        <Col className="about-section">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className="skills-section">
            <div className="skill">
              <h6>UX</h6>
              <ProgressBar progress={95} />
            </div>
            <div className="skill">
              <h6>Website Design</h6>
              <ProgressBar progress={95} />
            </div>
            <div className="skill">
              <h6>App Design</h6>
              <ProgressBar progress={98} />
            </div>
            <div className="skill">
              {" "}
              <h6>Graphic Design</h6>
              <ProgressBar progress={95} />
            </div>

          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
