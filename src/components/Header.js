import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { provinces } from '../data/locations';
import SideMenu from './SideMenu';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const handleDistrictClick = (districtId) => {
        navigate(`/district/${districtId}`);
        setIsMenuOpen(false);
    };

    return (
        <header className="main-header">
            <div className="header-content">
                <button className="menu-button" onClick={() => setIsSideMenuOpen(true)}>
                    ☰
                </button>
                <div className="logo" onClick={() => navigate('/')}>
                    <span className="discover">Discover</span>
                    <span className="sri-lanka">Sri Lanka</span>
                </div>
                <nav className="desktop-nav">
                    <div
                        className="menu-trigger"
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                    >
                        <span>Provinces & Districts</span>
                        {isMenuOpen && (
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    {Object.entries(provinces).map(([provinceId, province]) => (
                                        <div key={provinceId} className="province-column">
                                            <h3>{province.name}</h3>
                                            <ul>
                                                {province.districts.map((districtId) => {
                                                    const districtName = districtId.charAt(0).toUpperCase() +
                                                        districtId.slice(1).replace(/([A-Z])/g, ' $1');
                                                    return (
                                                        <li
                                                            key={districtId}
                                                            onClick={() => handleDistrictClick(districtId)}
                                                        >
                                                            {districtName}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
            <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        </header>
    );
};

export default Header;