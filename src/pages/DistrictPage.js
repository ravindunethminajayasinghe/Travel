// src/pages/DistrictPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { travelData } from '../data/locations'; // Import your data
import './DistrictPage.css';

const DistrictPage = () => {
  // This hook reads the ":districtName" from the URL
  const { districtName } = useParams();
  
  // Get the data for this specific district from our "database"
  const district = travelData[districtName];

  // Handle cases where the district doesn't exist in our data
  if (!district) {
    return (
      <div>
        <h2>District not found!</h2>
        <Link to="/">Back to Map</Link>
      </div>
    );
  }

  return (
    <div className="district-container">
      <Link to="/" className="back-link">← Back to Map</Link>
      
      <h1>{district.name}</h1>
      <p>Top travel locations:</p>
      
      <div className="locations-list">
        {district.locations.map((location) => (
          <div key={location.name} className="location-card">
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictPage;