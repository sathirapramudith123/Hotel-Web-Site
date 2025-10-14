import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Grand Horizon Hotel" />
            <span>Grand Horizon</span>
          </Link>
          
          <Navigation isMenuOpen={isMenuOpen} />
          
          <div className="header-actions">
            <Link to="/booking" className="btn btn-primary">
              Book Now
            </Link>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;