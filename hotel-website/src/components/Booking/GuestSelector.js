import React from 'react';
import './GuestSelector.css';

const GuestSelector = ({ value, onChange, error }) => {
  const handleIncrement = () => {
    if (value < 8) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div className="guest-selector">
      <label>Number of Guests *</label>
      <div className="selector-container">
        <button 
          type="button" 
          onClick={handleDecrement}
          disabled={value <= 1}
          className="selector-btn"
        >
          −
        </button>
        
        <span className="guest-count">{value} Guest{value !== 1 ? 's' : ''}</span>
        
        <button 
          type="button" 
          onClick={handleIncrement}
          disabled={value >= 8}
          className="selector-btn"
        >
          +
        </button>
      </div>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default GuestSelector;