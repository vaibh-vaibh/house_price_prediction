import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LocationDropdown from './LocationDropdown';

const HousePriceForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bhk: '',
    size: '',
    floor: '',
    areatype: '',
    city: '',
    bathroom: '',
    tenant: '',
    furnishing: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your actual API endpoint
      const response = await axios.post('http://localhost:5000/predict', formData);
      const predictedPrice = response.data.predictedPrice;

      // Navigate to the result page, passing the predictedPrice in state
      navigate('/services/result', { state: { predictedPrice } });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, you can add error handling or user feedback here.
    }
  };

  return (
    <div
      className="app-container"
      style={{
        background: "url('/images/house.jpg')",
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <header className="app-header">
        <h1>House Price Prediction</h1>
      </header>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="house-form">
          <select
            name="bhk"
            value={formData.bhk}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select No. of BHK
            </option>
            {[0, 1, 2, 3].map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="size"
            placeholder="Size (in sq ft)"
            value={formData.size}
            onChange={handleChange}
            className="form-input"
            required
          />

          <select
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select Number of Floors
            </option>
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <select
            name="areatype"
            value={formData.areatype}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select Area Type
            </option>
            {['Carpet Area', 'Super Area', 'Built Area'].map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            name="furnishing"
            value={formData.furnishing}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select Furnishing
            </option>
            {['Unfurnished', 'Semi-Furnished', 'Furnished'].map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <LocationDropdown
            value={formData.city}
            onChange={(value) => setFormData({ ...formData, city: value })}
            required
          />

          <select
            name="bathroom"
            value={formData.bathroom}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select Number of Bathrooms
            </option>
            {[...Array(5)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HousePriceForm;
