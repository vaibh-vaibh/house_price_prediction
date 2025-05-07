import React from "react";

const Bangalore = () => {
  const curdate = new Date();
  const formatDate = curdate.toLocaleString("en-US", {month : "short", year: "numeric"});
  return (
    <div className="container-fluid bg-primary text-white py-3">
      {/* make the flex property of text to align ment to center */}
      <div className="container d-flex justify-content-between align-items-center">
        {/* make last updated component in one */}
        <div className="d-flex align-items-center">
          <i className="bi bi-clock me-2"></i>
          <span>Last updated in {formatDate}</span>
        </div>
      </div>
      {/* for top image */}
      <div className="text-center mt-3">
        <img
          src="/images/bangalore bg.jpg"
          alt="PRT"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Bangalore;
