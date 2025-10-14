import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About Grand Horizon</h1>
          <p className="hero-subtitle">
            Where luxury meets comfort in the heart of the city
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Grand Horizon Hotel has been serving discerning travelers 
                with unparalleled hospitality and luxury accommodations. Our commitment to 
                excellence has made us a preferred choice for both business and leisure travelers.
              </p>
              <p>
                Located in the vibrant city center, we offer easy access to major attractions, 
                business districts, and cultural landmarks while providing a tranquil oasis 
                away from the hustle and bustle.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/hotel-lobby.jpg" alt="Hotel Lobby" />
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                To create unforgettable experiences by providing exceptional service, 
                luxurious accommodations, and personalized attention to every guest.
              </p>
              <p>
                We believe that true luxury lies in the details - from our carefully 
                curated amenities to our dedicated staff who anticipate your every need.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/hotel-service.jpg" alt="Hotel Service" />
            </div>
          </div>

          <div className="stats-section">
            <h2>Grand Horizon in Numbers</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">14</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">120+</div>
                <div className="stat-label">Luxury Rooms</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50k+</div>
                <div className="stat-label">Happy Guests</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Service</div>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Leadership Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">
                  <img src="/images/manager-1.jpg" alt="Sarah Johnson" />
                </div>
                <h3>Sarah Johnson</h3>
                <p>General Manager</p>
                <p className="member-bio">
                  With over 15 years in hospitality, Sarah ensures every guest 
                  experiences the Grand Horizon standard of excellence.
                </p>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <img src="/images/manager-2.jpg" alt="Michael Chen" />
                </div>
                <h3>Michael Chen</h3>
                <p>Operations Director</p>
                <p className="member-bio">
                  Michael oversees all hotel operations with precision and dedication 
                  to maintaining our high standards.
                </p>
              </div>
              <div className="team-member">
                <div className="member-photo">
                  <img src="/images/manager-3.jpg" alt="Emily Rodriguez" />
                </div>
                <h3>Emily Rodriguez</h3>
                <p>Guest Relations Manager</p>
                <p className="member-bio">
                  Emily and her team ensure every guest's stay is personalized 
                  and memorable from check-in to check-out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;