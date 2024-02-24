import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const services = [
  { name: 'Ambiente', image: '/images/dummy-600x400.png', description: 'Description for Ambiente' },
  { name: 'Equidad de genero', image: '/images/dummy-600x400.png', description: 'Description for Equidad de genero' },
  { name: 'Cultura', image: '/images/dummy-600x400.png', description: 'Description for Cultura' },
  { name: 'Derecho a la ciudad', image: '/images/dummy-600x400.png', description: 'Description for Derecho a la ciudad' },
];

function Services() {
  return (
    <Container id="services" fluid>
      <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1>Nuestros Servicios</h1>
        <p>Servicios enfocados en la comunidad y el desarrollo social</p>
        <Row>
          {services.map((service, index) => (
            <Col sm={6} md={4} lg={3} key={index}>
              <Card>
                <Card.Img variant="top" src={service.image} alt={service.name} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Services;