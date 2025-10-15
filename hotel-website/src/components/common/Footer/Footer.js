import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Grand Horizon Hotel" />
              <span>Grand Horizon</span>
            </div>
            <p className="footer-description">
              Experience luxury and comfort at Grand Horizon Hotel. 
              Your perfect getaway in the heart of the city.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/rooms">Rooms & Suites</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📍 123 Luxury Avenue, City Center</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@thegranddominion.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for special offers and updates</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Grand Horizon Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;