import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { provinces } from '../data/locations';
import SideMenu from './SideMenu';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleCloseMenu = () => {
        setIsAnimating(true);
        const menu = menuRef.current.querySelector('.mega-menu');
        menu.classList.remove('enter');
        menu.classList.add('exit');

        setTimeout(() => {
            setIsMenuOpen(false);
            setIsAnimating(false);
        }, 300); // Match animation duration
    };

    const handleDistrictClick = (districtId) => {
        navigate(`/district/${districtId}`);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        if (isMenuOpen && !isAnimating) {
            handleCloseMenu();
        } else if (!isMenuOpen) {
            setIsMenuOpen(true);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen && !isAnimating) {
                handleCloseMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen, isAnimating]);

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
                    <div className="menu-trigger" ref={menuRef}>
                        <span onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                            Provinces & Districts
                        </span>
                        {(isMenuOpen || isAnimating) && (
                            <div className={`mega-menu enter`}>
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