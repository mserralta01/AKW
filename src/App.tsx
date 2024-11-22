import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Academy from './components/Academy';
import Facilities from './components/Facilities';
import FeaturedRacers from './components/FeaturedRacers';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="academy">
        <Academy />
      </section>
      <section id="facilities">
        <Facilities />
      </section>
      <section id="racers">
        <FeaturedRacers />
      </section>
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;