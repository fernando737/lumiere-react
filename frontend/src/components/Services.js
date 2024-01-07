import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiWorld, BiCircle, BiLibrary, BiBuildings } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Services() {
  return (
    <section id="services" className="services section-bg">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Servicios</h2>
          <p>Revisa los servicios que ofrecemos a la comunidad</p>
        </div>

        <Row>
          <Col md={6} lg={3} className="d-flex" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><BiWorld /></div>
              <h4 className="title">Ambiente</h4>
            </div>
          </Col>

          <Col md={6} lg={3} className="d-flex" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><BiCircle /></div>
              <h4 className="title">Equidad de genero</h4>
            </div>
          </Col>

          <Col md={6} lg={3} className="d-flex" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><BiLibrary /></div>
              <h4 className="title">Cultura</h4>
            </div>
          </Col>

          <Col md={6} lg={3} className="d-flex" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><BiBuildings /></div>
              <h4 className="title">Derecho a la ciudad</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
