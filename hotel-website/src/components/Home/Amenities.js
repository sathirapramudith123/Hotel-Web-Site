import React from 'react';
import { AMENITIES } from '../../utils/constants';
import './Amenities.css';

const Amenities = () => {
  return (
    <section className="amenities section">
      <div className="container">
        <div className="section-title">
          <h2>Hotel Amenities</h2>
          <p>Enjoy our world-class facilities and services designed for your comfort</p>
        </div>
        
        <div className="amenities-grid">
          {AMENITIES.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-icon">
                {amenity.icon}
              </div>
              <h3>{amenity.name}</h3>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;