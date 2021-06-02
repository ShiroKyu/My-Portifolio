import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechSection from './components/TechSection';
import About from './components/About';
import Profile from './components/Profile';
import Portifolio from './components/Portifolio';

// import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechSection />
      <About />
      <Profile />
      <Portifolio />
      {/* <Quote /> */}
      <Footer />
    </div>
  );
}

export default App;
