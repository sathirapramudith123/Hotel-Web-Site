import React from 'react';
import { BookingProvider } from '../context/BookingContext';
import BookingForm from '../components/Booking/BookingForm';
import './Booking.css';

const Booking = () => {
  return (
    <BookingProvider>
      <div className="booking-page">
        <div className="container">
          <div className="booking-header">
            <h1>Book Your Stay</h1>
            <p>Fill out the form below to reserve your perfect room</p>
          </div>
          <BookingForm />
        </div>
      </div>
    </BookingProvider>
  );
};

export default Booking;