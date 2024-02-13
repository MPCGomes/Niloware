import React from 'react';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RPG from './pages/RPG';
import TCG from './pages/TCG';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RPG" element={<RPG />} />
            <Route path="/TCG" element={<TCG />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
