import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

const projects = [
  { name: 'Project 1', image: '/images/dummy-600x400.png', description: 'Description for Project 1' },
  { name: 'Project 2', image: '/images/dummy-600x400.png', description: 'Description for Project 2' },
  // Add more projects as needed
];

function Projects() {
    return (
      <Container id="projects" fluid>
        <Container className="vh-100 d-flex flex-column justify-content-center align-items-center my-auto">
          <h1 className='section-title'>Nuestros proyectos</h1>
          {projects.map((project, index) => (
            <Row key={index} className="mb-3">
              <Col sm={6}>
                <img src={project.image} alt={project.name} className="img-fluid"/>
              </Col>
              <Col sm={6} className='project-description'>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </Col>
            </Row>
          ))}
        </Container>
      </Container>
    );
  }

export default Projects;