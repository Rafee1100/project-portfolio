import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <div className="contact">
      <div className="contact-header">
        <h3>Lets Design Together</h3>
        <p className="contact-content">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        </div>
        <div className="contact-section d-flex">
          <div className="input-area">
            <input type="email" placeholder="Enter Your Email"/>
          </div>
          <div className="submission-area">
            <button className="submission-btn">Contact Me</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
