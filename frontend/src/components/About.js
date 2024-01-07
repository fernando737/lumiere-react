import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="about">
      <Container>
        <Row className="justify-content-between">
          <Col lg={5} className="d-flex align-items-center justify-content-center about-img">
            <img src='/images/about-img.svg' className="img-fluid" alt="Acerca de Lumiere" />
          </Col>
          <Col lg={6} className="pt-5 pt-lg-0">
            <h3>¿Qué es Lumiére?</h3>
            <p>
              Lumiére es una organización civil dedicada a impulsar proyectos que promuevan el desarrollo humano, territorial, social y económico sostenible en las comunidades. Nuestras propuestas utilizan estrategias innovadoras que incluyen componentes tecnológicos en búsqueda de facilitar el acceso de los proyectos a personas de diferentes ubicaciones geográficas y grupos poblacionales.
            </p>
            <p>
              Gracias a la integración de personas y entidades de diversas áreas del conocimiento promovemos una programación de capacitaciones, investigaciones, y proyectos sociales que abordan temáticas tales como derechos humanos, ambiente, equidad de género, derecho a la ciudad, participación ciudadana, mediación cultural, entre otros.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
