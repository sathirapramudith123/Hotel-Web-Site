import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';
import { ROOM_TYPES } from '../../utils/constants';
import { validateBookingForm, calculateNights, formatCurrency } from '../../utils/helpers';
import DatePicker from './DatePicker';
import GuestSelector from './GuestSelector';
import './BookingForm.css';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData, updateBooking, submitBooking, isLoading } = useBooking();
  
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: location.state?.roomType || '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
    
    // Update booking context for main booking data
    if (['checkIn', 'checkOut', 'guests', 'roomType'].includes(field)) {
      updateBooking(field, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const selectedRoom = ROOM_TYPES.find(room => room.id === parseInt(formData.roomType));
    const nights = calculateNights(formData.checkIn, formData.checkOut);
    const total = selectedRoom.price * nights;

    const bookingInfo = {
      ...formData,
      room: selectedRoom,
      nights,
      total,
      bookingId: `BK${Date.now()}`,
      bookingDate: new Date().toISOString()
    };

    const result = await submitBooking(bookingInfo);
    
    if (result.success) {
      navigate('/booking-confirmation', { 
        state: { booking: bookingInfo } 
      });
    } else {
      alert(result.message);
    }
  };

  const selectedRoom = ROOM_TYPES.find(room => room.id === parseInt(formData.roomType));
  const nights = calculateNights(formData.checkIn, formData.checkOut);
  const total = selectedRoom ? selectedRoom.price * nights : 0;

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <h2>Book Your Stay</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Booking Details</h3>
            
            <div className="form-row">
              <DatePicker
                label="Check-in Date"
                value={formData.checkIn}
                onChange={(value) => handleInputChange('checkIn', value)}
                error={errors.checkIn}
                minDate={new Date().toISOString().split('T')[0]}
              />
              
              <DatePicker
                label="Check-out Date"
                value={formData.checkOut}
                onChange={(value) => handleInputChange('checkOut', value)}
                error={errors.checkOut}
                minDate={formData.checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>

            <GuestSelector
              value={formData.guests}
              onChange={(value) => handleInputChange('guests', value)}
              error={errors.guests}
            />

            <div className="form-group">
              <label htmlFor="roomType">Room Type *</label>
              <select
                id="roomType"
                value={formData.roomType}
                onChange={(e) => handleInputChange('roomType', e.target.value)}
                className={errors.roomType ? 'error' : ''}
              >
                <option value="">Select Room Type</option>
                {ROOM_TYPES.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.name} - {formatCurrency(room.price)}/night
                  </option>
                ))}
              </select>
              {errors.roomType && <span className="error-text">{errors.roomType}</span>}
            </div>
          </div>

          <div className="form-section">
            <h3>Guest Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                rows="4"
                placeholder="Any special requirements or requests..."
              />
            </div>
          </div>

          {selectedRoom && formData.checkIn && formData.checkOut && (
            <div className="booking-summary">
              <h3>Booking Summary</h3>
              <div className="summary-details">
                <div className="summary-item">
                  <span>Room:</span>
                  <span>{selectedRoom.name}</span>
                </div>
                <div className="summary-item">
                  <span>Duration:</span>
                  <span>{nights} night{nights !== 1 ? 's' : ''}</span>
                </div>
                <div className="summary-item">
                  <span>Price per night:</span>
                  <span>{formatCurrency(selectedRoom.price)}</span>
                </div>
                <div className="summary-item total">
                  <span>Total:</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary btn-large"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Complete Booking'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;