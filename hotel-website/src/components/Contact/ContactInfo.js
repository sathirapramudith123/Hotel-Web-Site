import React from 'react';
import { CONTACT_INFO } from '../../utils/constants';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Get in Touch</h2>
      <p className="contact-description">
        We're here to help you with any questions or concerns about your stay. 
        Don't hesitate to reach out to us.
      </p>
      
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div className="contact-text">
            <h3>Address</h3>
            <p>{CONTACT_INFO.address}</p>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">📞</div>
          <div className="contact-text">
            <h3>Phone</h3>
            <p>{CONTACT_INFO.phone}</p>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">✉️</div>
          <div className="contact-text">
            <h3>Email</h3>
            <p>{CONTACT_INFO.email}</p>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">🕒</div>
          <div className="contact-text">
            <h3>Front Desk Hours</h3>
            <p>{CONTACT_INFO.hours}</p>
          </div>
        </div>
      </div>
      
      <div className="map-section">
        <h3>Find Us</h3>
        <div className="map-placeholder">
          <p>📍 Interactive Map Would Appear Here</p>
          <p>123 Luxury Avenue, City Center, 10001</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;