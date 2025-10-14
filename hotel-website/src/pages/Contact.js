import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with any questions or special requests.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <ContactForm />
          </div>
          
          <div className="contact-info-section">
            <ContactInfo />
          </div>
        </div>
        
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What time is check-in and check-out?</h3>
              <p>Check-in is from 2:00 PM, and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer airport transportation?</h3>
              <p>Yes, we provide airport transportation services. Please contact us in advance to arrange pickup.</p>
            </div>
            <div className="faq-item">
              <h3>Is parking available at the hotel?</h3>
              <p>We offer complimentary valet parking for all hotel guests throughout their stay.</p>
            </div>
            <div className="faq-item">
              <h3>Are pets allowed?</h3>
              <p>We welcome pets in designated rooms. Additional fees and restrictions apply. Please contact us for details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;