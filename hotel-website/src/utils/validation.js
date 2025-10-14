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

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};