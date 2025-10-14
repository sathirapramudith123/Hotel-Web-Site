import { ROOM_TYPES } from './constants';

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const difference = end.getTime() - start.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24));
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s-()]{10,}$/;
  return re.test(phone);
};

export const generateBookingId = () => {
  return `BK${Date.now()}${Math.random().toString(36).substr(2, 5)}`.toUpperCase();
};

// Add the missing validation function
export const validateBookingForm = (formData) => {
  const errors = {};

  if (!formData.checkIn) {
    errors.checkIn = 'Check-in date is required';
  }

  if (!formData.checkOut) {
    errors.checkOut = 'Check-out date is required';
  }

  if (formData.checkIn && formData.checkOut) {
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    
    if (checkOut <= checkIn) {
      errors.checkOut = 'Check-out date must be after check-in date';
    }
  }

  if (!formData.guests || formData.guests < 1) {
    errors.guests = 'Number of guests is required';
  }

  if (!formData.roomType) {
    errors.roomType = 'Room type is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};