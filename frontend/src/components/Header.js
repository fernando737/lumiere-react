import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
      <Navbar id="header" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lumiere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Nosotros</Nav.Link>
              <Nav.Link href="#services">Servicios</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#contactus">Contactenos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default Header;