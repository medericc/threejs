import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Travel from './components/Travel';
import Timeline from './components/Timeline';
import Biography from './components/Biography';
import Footer from './components/Footer';
import Stats from './components/Stats'; // Import de la page Stats

function App() {
  return (
    <div className="relative bg-black min-h-screen text-white">
      {/* Header toujours visible */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <>
            <Travel />
            <Biography />
            <Timeline />
          </>
        } />
        <Route path="/stats" element={<Stats />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
