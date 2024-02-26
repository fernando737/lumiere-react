import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Update sections to include titles
const sections = [
  { id: 'home', title: 'Inicio' },
  { id: 'about', title: 'Nosotros' },
  { id: 'services', title: 'Servicios' },
  { id: 'projects', title: 'Proyectos' },
  { id: 'contact', title: 'Contactenos' }
];

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find(section => {
        const el = document.getElementById(section.id);
        return el && window.scrollY >= el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight;
      });
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container id="header">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {sections.map(section => (
              <Nav.Link
                key={section.id}
                href={`#${section.id}`}
                className={section.id === activeSection ? 'active' : ''}
              >
                {section.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
