import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { formatCurrency, formatDate } from '../utils/helpers';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="booking-confirmation">
        <div className="container">
          <div className="confirmation-error">
            <h2>Booking Not Found</h2>
            <p>Sorry, we couldn't find your booking information.</p>
            <Link to="/booking" className="btn btn-primary">
              Make a New Booking
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-confirmation">
      <div className="container">
        <div className="confirmation-card">
          <div className="confirmation-header">
            <div className="success-icon">✓</div>
            <h1>Booking Confirmed!</h1>
            <p>Thank you for choosing Grand Horizon Hotel</p>
          </div>

          <div className="confirmation-details">
            <div className="booking-reference">
              <strong>Booking Reference:</strong> {booking.bookingId}
            </div>
            
            <div className="details-grid">
              <div className="detail-section">
                <h3>Guest Information</h3>
                <div className="detail-item">
                  <span>Name:</span>
                  <span>{booking.firstName} {booking.lastName}</span>
                </div>
                <div className="detail-item">
                  <span>Email:</span>
                  <span>{booking.email}</span>
                </div>
                <div className="detail-item">
                  <span>Phone:</span>
                  <span>{booking.phone}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>Stay Details</h3>
                <div className="detail-item">
                  <span>Room:</span>
                  <span>{booking.room.name}</span>
                </div>
                <div className="detail-item">
                  <span>Check-in:</span>
                  <span>{formatDate(booking.checkIn)} (2:00 PM)</span>
                </div>
                <div className="detail-item">
                  <span>Check-out:</span>
                  <span>{formatDate(booking.checkOut)} (11:00 AM)</span>
                </div>
                <div className="detail-item">
                  <span>Duration:</span>
                  <span>{booking.nights} night{booking.nights !== 1 ? 's' : ''}</span>
                </div>
                <div className="detail-item">
                  <span>Guests:</span>
                  <span>{booking.guests}</span>
                </div>
              </div>
            </div>

            {booking.specialRequests && (
              <div className="special-requests">
                <h3>Special Requests</h3>
                <p>{booking.specialRequests}</p>
              </div>
            )}

            <div className="price-summary">
              <h3>Price Summary</h3>
              <div className="price-item">
                <span>{booking.room.name} × {booking.nights} nights</span>
                <span>{formatCurrency(booking.total)}</span>
              </div>
              <div className="price-total">
                <span>Total Amount</span>
                <span>{formatCurrency(booking.total)}</span>
              </div>
            </div>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/rooms" className="btn btn-secondary">
              Explore More Rooms
            </Link>
          </div>

          <div className="confirmation-note">
            <p>
              <strong>Important:</strong> A confirmation email has been sent to {booking.email}. 
              Please present your booking reference at check-in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;