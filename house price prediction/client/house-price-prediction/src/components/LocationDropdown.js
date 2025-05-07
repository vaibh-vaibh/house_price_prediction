import React from 'react';

const LocationDropdown = ({ value, onChange }) => {
  const city = [
    'Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Hyderabad', 'Bangalore',
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-input"
      name="location"
    >
      <option value="">Select City</option>
      {city.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default LocationDropdown;
