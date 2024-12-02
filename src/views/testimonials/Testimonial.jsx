import React from "react";
import { Carousel, Container, Card, Row, Col } from "react-bootstrap";
import testimonials from "../../utils/testimonials";

const Testimonial = () => {
  return (
    <Container>
      <div className="testimonial">
        <div className="testimonial-header">
          <h3>Testimonials</h3>
          <p className="testimonial-content">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium.
          </p>
        </div>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Carousel.Item interval={3000}>
              <Card className="testimonial-card">
                <Row className="align-items-center justify-content-center">
                  <Col md="3" sm="12" className="text-center">
                    <img src={testimonial.img} alt="..." />
                  </Col>
                  <Col md="9" sm="12" className="text-center">
                    <p className="text-wrap">
                      <span className="text-warning fs-1">"</span>
                      {testimonial.about}
                      <span className="text-warning fs-1">"</span>
                    </p>
                    <div className="text-start p-4">
                      <h6>{testimonial.name}</h6>
                      <p>{testimonial.designation}</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </Container>
  );
};

export default Testimonial;
