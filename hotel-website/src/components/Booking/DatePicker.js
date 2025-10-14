import React from 'react';
import './DatePicker.css';

const DatePicker = ({ label, value, onChange, error, minDate, maxDate }) => {
  return (
    <div className="date-picker">
      <label htmlFor={label}>{label} *</label>
      <input
        type="date"
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={minDate}
        max={maxDate}
        className={error ? 'error' : ''}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default DatePicker;