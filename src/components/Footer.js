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
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section mobile-half">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><a href="mailto:kavindbimsara@gmail.com">kavindbimsara@gmail.com</a></li>
            <li><a href="tel:+94710119042">+94 710119042</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Discover Sri Lanka</p>
      </div>
    </footer>
  );
};

export default Footer;