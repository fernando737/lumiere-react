import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
