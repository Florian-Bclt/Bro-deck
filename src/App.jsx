import { useState, useEffect } from 'react';
import './App.css';
import CardContainer from './container/CardContainer/CardContainer';
import HeroSection from './container/heroSection/HeroSection'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <HeroSection />
      <Sidebar />
    </>
  );
}

export default App;
