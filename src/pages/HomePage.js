// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SriLankaMap } from '../components/SriLankaMap.svg';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleDistrictClick = (event) => {
    const districtId = event.target.id;

    // Only navigate if the clicked element has a valid district ID
    if (districtId) {
      navigate(`/district/${districtId}`);
    }
  };

  return (
    <div className="homepage-container">
      <h1>
        <span className="discover">Discover</span>
        <span className="sri-lanka">Sri Lanka</span>
        <br />
        <span className="with-names">with Ravindu & Isura</span>
      </h1>

      <SriLankaMap 
        onClick={handleDistrictClick} 
        className="map" 
        style={{ cursor: 'pointer', transition: 'transform 0.5s' }} 
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'} 
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'} 
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
      />
      <p>Click on a district to explore travel locations.</p>
    </div>
  );
};

export default HomePage;    