import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { travelData, provinces } from '../data/locations';
import './SideMenu.css';

const SideMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [expandedProvinces, setExpandedProvinces] = useState({});

  const handleDistrictClick = (districtId) => {
    navigate(`/district/${districtId}`);
    onClose();
  };

  const toggleProvince = (provinceId) => {
    setExpandedProvinces((prev) => ({
      ...prev,
      [provinceId]: !prev[provinceId],
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'side-menu-overlay') {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="side-menu-overlay" onClick={handleOverlayClick}></div>
      )}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <h3>Provinces & Districts</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="provinces-list">
          {Object.entries(provinces).map(([provinceId, province]) => (
            <div key={provinceId} className="province-section">
              <div
                className="province-header"
                onClick={() => toggleProvince(provinceId)}
              >
                <span>{province.name}</span>
                <span className="expand-icon">
                  {expandedProvinces[provinceId] ? '−' : '+'}
                </span>
              </div>
              <div className={`districts-list ${expandedProvinces[provinceId] ? 'expanded' : ''}`}>
                {province.districts.map((districtId) => (
                  <div
                    key={districtId}
                    className="district-item"
                    onClick={() => handleDistrictClick(districtId)}
                  >
                    {travelData[districtId].name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideMenu;