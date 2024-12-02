import React from 'react';
import './App.css';
import Header from './components/Header';
import Travel from './components/Travel';
import InteractiveMap from './components/InteractiveMap';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="relative bg-black min-h-screen text-white">
      <Header />
      <Travel />
      <InteractiveMap />
      <Timeline />
      <Achievements />
    </div>
  );
}

export default App;
