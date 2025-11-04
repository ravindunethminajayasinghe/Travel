// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SriLankaMap } from '../components/SriLankaMap.svg';
import './HomePage.css'; // We'll create this file next

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
      <p>Click on a district to explore travel locations.</p>
      
      {/* This is the magic! The entire SVG becomes a single 
        component, and the click handler will "bubble up" 
        from the path that was clicked.
      */}
      <SriLankaMap onClick={handleDistrictClick} className="map" />
    </div>
  );
};

export default HomePage;    