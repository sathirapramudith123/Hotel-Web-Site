import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/images/hotel-exterior.jpg" alt="Grand Horizon Hotel Exterior" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span>Grand Horizon</span>
          </h1>
          <p className="hero-subtitle">
            Experience luxury redefined at our exquisite hotel. 
            Where comfort meets elegance in the heart of the city.
          </p>
          <div className="hero-actions">
            <Link to="/booking" className="btn btn-primary">
              Book Your Stay
            </Link>
            <Link to="/rooms" className="btn btn-secondary">
              Explore Rooms
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;