import React from 'react';

const ExploreCardBuyExpanded = () => {
  return (
    <div className="container py-4">
      <div className="text-center">
        <div className="text-uppercase fw-bold text-muted">ALL PROPERTY NEEDS - ONE PORTAL</div>
        <div className="display-4 fw-bold my-3">
          Find Better Places to Live, Work and Wonder...
        </div>
        <div className="mb-4"></div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <picture>
            <source
              type="image/webp"
              alt="Buying a Home"
              title="VPHomes"
              style={{
                animationName: "gracefulimage",
                animationDuration: "0.3s",
                animationIterationCount: 1,
                animationTimingFunction: "ease-in",
              }}
            />
            <img
              src="/images/explore.jpeg"
              alt="Buying a Home"
              title="VPhomes"
              decoding="auto"
              style={{
                animationName: "gracefulimage",
                animationDuration: "0.3s",
                animationIterationCount: 1,
                animationTimingFunction: "ease-in",
                width: '100%',
              }}
              className="img-fluid"
            />
          </picture>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="text-uppercase fw-bold text-muted mb-2">BUY A HOME</div>
          <div className="h4 fw-bold mb-3">
            Find, Buy &amp; Own Your Dream Home
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCardBuyExpanded;
