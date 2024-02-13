import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RPG from '../pages/RPG';
import TCG from '../pages/TCG';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/RPG" element={<RPG />} />
      <Route path="/TCG" element={<TCG />} />
    </Routes>
  );
}

export default AppRoutes;
