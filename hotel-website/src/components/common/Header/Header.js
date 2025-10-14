import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Hotel Logo" />
            <span>Luxury Hotel</span>
          </Link>
          <Navigation />
          <div className="header-actions">
            <button className="btn-book">Book Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;