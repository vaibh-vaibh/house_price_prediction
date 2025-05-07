import React from 'react';
import { Link } from 'react-router-dom';

const InsightsTools = () => {
  return (
    <div className="container py-4">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto">
          <h3 className="fw-bold">Insights &amp; Tools</h3>
          <p className="text-muted mb-0">Go from browsing to buying</p>
        </div>
      </div>

      <div className="row mt-4">
        {/* Left Box - Start */}
        <div className="col-md-6 mb-4 d-flex justify-content-md-start justify-content-center">
          <div className="card h-100" style={{ width: '250px' }}>
            <div className="card-body text-center d-flex flex-column justify-content-between">
              <img
                src="/images/PriceTrend.png"
                alt="Price Trends"
                style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
                className="mb-3"
              />
              <div>
                <Link
                  to="/price-trends"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-semibold d-block"
                >
                  Price Trends
                </Link>
                <p className="text-muted mb-0">Check property rates and prices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Box - End */}
        <div className="col-md-6 mb-4 d-flex justify-content-md-end justify-content-center">
          <div className="card h-100" style={{ width: '250px' }}>
            <div className="card-body text-center d-flex flex-column justify-content-between">
              <img
                src="/images/ReviewsRatings.png"
                alt="Genuine reviews by Residents"
                style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
                className="mb-3"
              />
              <div>
                <Link
                  to="/reviews"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-semibold d-block"
                >
                  Genuine reviews
                </Link>
                <p className="text-muted mb-0">Know what reviews are saying</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsTools;
