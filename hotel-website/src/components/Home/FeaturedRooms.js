import React from 'react';
import { Link } from 'react-router-dom';
import { ROOM_TYPES } from '../../utils/constants';
import { formatCurrency } from '../../utils/helpers';
import './FeaturedRooms.css';

const FeaturedRooms = () => {
  const featuredRooms = ROOM_TYPES.slice(0, 3);

  return (
    <section className="featured-rooms section">
      <div className="container">
        <div className="section-title">
          <h2>Featured Rooms</h2>
          <p>Discover our carefully curated selection of luxurious accommodations</p>
        </div>
        
        <div className="rooms-grid">
          {featuredRooms.map(room => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <img src={room.image} alt={room.name} />
                <div className="room-price">
                  {formatCurrency(room.price)}<span>/night</span>
                </div>
              </div>
              
              <div className="room-content">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                
                <div className="room-features">
                  <div className="feature">
                    <span>👥</span>
                    {room.capacity} Guests
                  </div>
                  <div className="feature">
                    <span>📏</span>
                    {room.size}
                  </div>
                  <div className="feature">
                    <span>🛏️</span>
                    {room.beds}
                  </div>
                </div>
                
                <div className="room-actions">
                  <Link to={`/rooms`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-cta">
          <Link to="/rooms" className="btn btn-secondary">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;