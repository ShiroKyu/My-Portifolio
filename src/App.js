import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechSection from './components/TechSection';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechSection />
    </div>
  );
}

export default App;
