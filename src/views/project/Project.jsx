import React from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";

const Project = () => {
  return (
    <Container>
      <div className="project">
        <div className="project-header">
          <h3>My Projects</h3>
          <p className="project-content">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
          <div className="d-flex justify-content-center project-filters mt-3">
            <button className="project-filter-btn fw-normal">All</button>
            <button className="project-filter-btn fw-normal">UI/UX</button>
            <button className="project-filter-btn active fw-normal">
              Web Design
            </button>
            <button className="project-filter-btn fw-normal">App Design</button>
            <button className="project-filter-btn fw-normal">
              Graphic Design
            </button>
          </div>
        </div>
        <div className="projects-section mt-5">
          <Row>
            <Col md="4" sm="12">
              <Card className="project-card">
                <div className="project-preview">
                  <img src={project1} class="card-img-top" alt="..." />
                </div>
                <div className="project-body mt-3">
                  <p className="text-warning">Web Design</p>
                  <h6>AirCalling Landing Page Design </h6>
                </div>
              </Card>
            </Col>
            <Col md="4" sm="12">
              <Card className="project-card">
                <div className="project-preview">
                  <img src={project2} class="card-img-top" alt="..." />
                </div>
                <div className="project-body mt-3">
                  <p className="text-warning">Web Design</p>
                  <h6>Business Landing Page Design </h6>
                </div>
              </Card>
            </Col>
            <Col md="4" sm="12">
              <Card className="project-card">
                <div className="project-preview">
                  <img src={project3} class="card-img-top" alt="..." />
                </div>
                <div className="project-body mt-3">
                  <p className="text-warning">Web Design</p>
                  <h6>Ecom Web Page Design </h6>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Project;
