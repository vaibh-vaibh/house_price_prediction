import React from "react";

const PropertyPriceTrends = () => {
  return (
    <div className="container py-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded">
        <div className="d-flex align-items-center">
          <i className="bi bi-geo-alt-fill me-2"></i>
          <span className="fw-bold">Select City</span>
        </div>
        <img src="/images/PriceTrend.png" alt="Price Trend" width="64" />
      </div>

      {/* Title Section */}
      <div className="text-center mt-3">
        <h1 className="fw-bold">Property Rates &amp; Price Trends</h1>
        <p className="fs-5 fw-semibold">in India</p>
      </div>
      </div>
  );
};

export default PropertyPriceTrends;
