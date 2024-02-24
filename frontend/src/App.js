import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';





function App() {
  return (
    <Container fluid>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContactUs />
      <Footer />
    </Container>
  );
}

export default App;
