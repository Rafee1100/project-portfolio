import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import uiVector from "../../assets/images/Uivector.png";
import webVector from "../../assets/images/webbDesign.png";
import appVector from "../../assets/images/appDesign.png";
import graphicVector from "../../assets/images/graphicDesig.png";

const Services = () => {
  return (
    <Container>
      <div className="service">
        <div className="service-header">
          <h3>Services</h3>
          <p className="service-content">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>

        <Row>
          <Col md="3" sm="12">
            <Card className="service-card m-2">
              <img src={uiVector} alt="" className="service-image" />
              <h5 className="pt-2">UI/UX</h5>
              <p>
              Lorem ipsum dolor sit amet consectetur. Morbi diam 
              </p>
            </Card>
          </Col>
          <Col md="3" sm="12">
            <Card className="service-card m-2">
              <img src={webVector} alt="" className="service-image" />
              <h5 className="pt-2">Web Design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi diam 
              </p>
            </Card>
          </Col>
          <Col md="3" sm="12">
            <Card className="service-card m-2">
              <img src={appVector} alt="" className="service-image" />
              <h5 className="pt-2">App Design</h5>
              <p>
              Lorem ipsum dolor sit amet consectetur. Morbi diam 
              </p>
            </Card>
          </Col>
          <Col md="3" sm="12">
            <Card className="service-card m-2">
              <img src={graphicVector} alt="" className="service-image" />
              <h5 className="pt-2">Graphic Design</h5>
              <p>
              Lorem ipsum dolor sit amet consectetur. Morbi diam 
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Services;
