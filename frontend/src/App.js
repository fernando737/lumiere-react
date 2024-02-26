import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  return (
    <Container fluid>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
