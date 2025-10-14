import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRooms } from '../../hooks/useRooms';
import { formatCurrency } from '../../utils/helpers';
import RoomGallery from './RoomGallery';
import './RoomDetails.css';

const RoomDetails = () => {
  const { id } = useParams();
  const { getRoomById, loading, error } = useRooms();
  const room = getRoomById(parseInt(id));

  if (loading) {
    return <div className="loading">Loading room details...</div>;
  }

  if (error || !room) {
    return (
      <div className="error">
        <h2>Room not found</h2>
        <p>Sorry, the room you're looking for doesn't exist.</p>
        <Link to="/rooms" className="btn btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="room-details">
      <div className="container">
        <div className="room-details-header">
          <h1>{room.name}</h1>
          <div className="room-price-large">
            {formatCurrency(room.price)}<span>/night</span>
          </div>
        </div>

        <RoomGallery room={room} />

        <div className="room-details-content">
          <div className="room-info">
            <div className="room-description">
              <h2>Room Description</h2>
              <p>{room.description}</p>
            </div>

            <div className="room-specifications">
              <h2>Specifications</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Room Size</span>
                  <span className="spec-value">{room.size}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Maximum Guests</span>
                  <span className="spec-value">{room.capacity}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Bed Configuration</span>
                  <span className="spec-value">{room.beds}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Availability</span>
                  <span className={`spec-value ${room.available ? 'available' : 'unavailable'}`}>
                    {room.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
            </div>

            <div className="room-amenities-detailed">
              <h2>Amenities & Services</h2>
              <div className="amenities-grid-detailed">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span className="amenity-check">✓</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="room-booking-widget">
            <div className="booking-card">
              <h3>Book This Room</h3>
              <div className="booking-price">
                {formatCurrency(room.price)}<span>/night</span>
              </div>
              
              <div className="booking-info">
                <div className="info-item">
                  <span>Check-in:</span>
                  <span>2:00 PM</span>
                </div>
                <div className="info-item">
                  <span>Check-out:</span>
                  <span>11:00 AM</span>
                </div>
                <div className="info-item">
                  <span>Max Guests:</span>
                  <span>{room.capacity}</span>
                </div>
              </div>

              <Link 
                to="/booking" 
                state={{ roomType: room.id }}
                className={`btn btn-primary btn-large ${!room.available ? 'disabled' : ''}`}
              >
                {room.available ? 'Book Now' : 'Not Available'}
              </Link>
              
              <div className="booking-note">
                <p>💳 Free cancellation up to 24 hours before check-in</p>
                <p>🔒 Best rate guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;