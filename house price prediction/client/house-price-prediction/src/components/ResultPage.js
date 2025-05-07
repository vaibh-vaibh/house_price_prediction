import React from 'react';
import { useLocation } from 'react-router-dom'; 

const ResultPage = () => {
  const location = useLocation(); 
  const { predictedPrice } = location.state || {}; 

  return (
    <div className="result-container"
    style={
      {
      background: "url('/images/house.jpg')",
      backgroundSize: 'cover',
      height: '100vh',
      }
    }>
      <header className="app-header">
        <h1>House Price Prediction</h1>
      </header>
      <h2>
        Your house price predicted ={' '}
        {predictedPrice ? predictedPrice.toLocaleString() : 'N/A'} INR
      </h2>
    </div>
  );
};

export default ResultPage;
