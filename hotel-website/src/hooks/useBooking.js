import { useState } from 'react';

export const useBooking = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    totalPrice: 0
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateBooking = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotal = (roomPrice, nights) => {
    const total = roomPrice * nights;
    setBookingData(prev => ({
      ...prev,
      totalPrice: total
    }));
    return total;
  };

  const submitBooking = async (bookingInfo) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Booking submitted:', bookingInfo);
      return { success: true, message: 'Booking confirmed!' };
    } catch (error) {
      return { success: false, message: 'Booking failed. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    bookingData,
    updateBooking,
    calculateTotal,
    submitBooking,
    isLoading
  };
};