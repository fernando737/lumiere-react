import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <Container>
        <Row className="gy-4">
          <Col lg={6} className="order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Organización Lumiere</h1>
            <h2>Cultura, innovación, educación, desarrollo, tecnología y ciencia.</h2>
            <div>
              <Button href="#about" variant="primary" className="btn-get-started scrollto">Nosotros</Button>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2 hero-img">
            <img src="/images/hero-img.svg" className="img-fluid animated" alt="Hero" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
