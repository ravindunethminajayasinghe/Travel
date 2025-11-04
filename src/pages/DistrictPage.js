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
      <div className="not-found-container">
      <h2 className="not-found-title">District not found!</h2>
      <Link to="/" className="back-link">← Back to Map</Link>
      </div>
    );
  }

  return (
    <main className="district-container">
      <nav aria-label="Navigation">
        <Link to="/" className="back-link" aria-label="Back to Map">← Back to Map</Link>
      </nav>
      
      <h1>{district.name}</h1>
      <p>Top travel locations:</p>
      
      <section className="locations-list" aria-label="Travel Locations">
        {district.locations.map((location) => (
          <article key={location.name} className="location-card">
            <h3>{location.name}</h3>
            <p>{location.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default DistrictPage;