import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section mobile-full">
          <h4>About Discover Sri Lanka</h4>
          <p className="about-text">Discover the beauty and culture of Sri Lanka through our comprehensive travel guide.</p>
        </div>
        <div className="footer-section mobile-half">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section mobile-half">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><a href="https://www.instagram.com/kavindubimsara" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Developed with ❤️ by Kavindu Bimsara Fernando, Concept by Ravindu Nethmina Jayasinghe</p>
      </div>
    </footer>
  );
};

export default Footer;