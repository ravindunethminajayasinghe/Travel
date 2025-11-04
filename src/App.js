// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DistrictPage from './pages/DistrictPage';
import './App.css'; // You'll use this for styling

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/district/:districtName" element={<DistrictPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;