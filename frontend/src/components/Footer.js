import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillPersonFill, BsFillBriefcaseFill, BsFillEnvelopeFill, BsFillHouseDoorFill, BsFillMusicPlayerFill, BsFillTreeFill  } from 'react-icons/bs';

function Footer() {
  return (
    <Container id="footer" fluid>
      <Container>
        <Row>
          <Col lg={4}>
              <h3>Contactanos:</h3>
              <ul>
                <li>Sogamoso, Boyaca, Colombia</li>
                <li>email: info@organizacionlumiere.com</li>
                <li>tel: 3133496952</li>
              </ul>
          </Col>
          <Col lg={4}>
                    <h3>Links:</h3>
                    <ul>
                      <li><BsFillPersonFill /><a href="#services"> Acerca de nosotros</a></li>
                      <li><BsFillBriefcaseFill /><a href="#projects"> Proyectos</a></li>
                      <li><BsFillEnvelopeFill /><a href="#contactus"> Contactanos</a></li>          
                    </ul>
          </Col>
          <Col lg={4}>
            <h3>Servicios:</h3>
            <ul>
              <li><BsFillTreeFill /> Ambiente</li>
              <li><BsFillPersonFill /> Equidad de género</li>
              <li><BsFillMusicPlayerFill /> Cultura</li>
              <li><BsFillHouseDoorFill /> Derecho a la ciudad</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;