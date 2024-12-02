import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage';
import ResourcesPage from './pages/ResourcesPage';
import LogicGatesPage from './pages/LogicGates/LogicGatesPage';
import LogicGateDetail from './pages/LogicGates/LogicGateDetail';
import SimulationsPage from './pages/SimulationsPage';
import LogicGateSimulatorPage from './pages/LogicGateSimulatorPage';
import NumberSystemsPage from './pages/NumberSystemsPage';
import NumberSystemSimulatorPage from './pages/NumberSystemSimulatorPage';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage isDarkMode={isDarkMode} />} />
            <Route path="/resources" element={<ResourcesPage isDarkMode={isDarkMode} />} />
            <Route path="/resources/logic-gates" element={<LogicGatesPage isDarkMode={isDarkMode} />} />
            <Route path="/resources/logic-gates/:gateType" element={<LogicGateDetail isDarkMode={isDarkMode} />} />
            <Route path="/resources/number-systems" element={<NumberSystemsPage isDarkMode={isDarkMode} />} />
            <Route path="/simulations" element={<SimulationsPage isDarkMode={isDarkMode} />} />
            <Route path="/simulations/logic-gates" element={<LogicGateSimulatorPage isDarkMode={isDarkMode} />} />
            <Route path="/simulations/number-systems" element={<NumberSystemSimulatorPage isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;
