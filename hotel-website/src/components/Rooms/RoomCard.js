import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import './RoomCard.css';

const RoomCard = ({ room }) => {
  return (
    <div className="room-card-detailed">
      <div className="room-image">
        <img src={room.image} alt={room.name} />
        <div className="room-badge">
          {room.available ? 'Available' : 'Booked'}
        </div>
      </div>
      
      <div className="room-content">
        <div className="room-header">
          <h3>{room.name}</h3>
          <div className="room-price">
            {formatCurrency(room.price)}<span>/night</span>
          </div>
        </div>
        
        <p className="room-description">{room.description}</p>
        
        <div className="room-specs">
          <div className="spec">
            <span>📏</span>
            <strong>Size:</strong> {room.size}
          </div>
          <div className="spec">
            <span>👥</span>
            <strong>Capacity:</strong> {room.capacity} Guests
          </div>
          <div className="spec">
            <span>🛏️</span>
            <strong>Beds:</strong> {room.beds}
          </div>
        </div>
        
        <div className="room-amenities">
          <h4>Room Amenities:</h4>
          <div className="amenities-list">
            {room.amenities.map((amenity, index) => (
              <span key={index} className="amenity-tag">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <div className="room-actions">
          <Link 
            to="/booking" 
            state={{ roomType: room.id }}
            className={`btn btn-primary ${!room.available ? 'disabled' : ''}`}
            onClick={e => !room.available && e.preventDefault()}
          >
            {room.available ? 'Book Now' : 'Not Available'}
          </Link>
          <Link to={`/rooms/${room.id}`} className="btn btn-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;