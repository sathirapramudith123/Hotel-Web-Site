import React, { createContext, useContext, useReducer } from 'react';

const BookingContext = createContext();

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATES':
      return {
        ...state,
        checkIn: action.payload.checkIn,
        checkOut: action.payload.checkOut
      };
    case 'SET_GUESTS':
      return {
        ...state,
        guests: action.payload
      };
    case 'SET_ROOM_TYPE':
      return {
        ...state,
        roomType: action.payload
      };
    case 'SET_BOOKING_DATA':
      return {
        ...state,
        ...action.payload
      };
    case 'RESET_BOOKING':
      return {
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: ''
      };
    default:
      return state;
  }
};

const initialState = {
  checkIn: '',
  checkOut: '',
  guests: 1,
  roomType: ''
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};