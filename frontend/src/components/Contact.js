import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container id="contact" fluid>
        <Container className="vh-100 d-flex justify-content-center flex-column align-items-center">
        <h1>Contactanos</h1>
        <p>Esperamos tu mensaje:</p>
        <Row className="w-100" >
          <Col lg={4} className="text-center">
            <h3>Ubicación:</h3>
            <p>Sogamoso Boyaca</p>
          </Col>
          <Col lg={4} className="text-center">
            <h3>Email:</h3>
            <p>info@organizacionlumiere.com</p>
          </Col>
          <Col lg={4} className="text-center">
            <h3>Tel:</h3>
            <p>3133496952</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUs;