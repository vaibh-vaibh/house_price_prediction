import React from 'react';
import VPHomes from './VPHomes';
import Company from './Company';
import ContactUs from './ContactUs';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row justify-content-center text-start text-md-start">
          <div className="col-12 col-md-10">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4">
              <VPHomes />
              <Company />
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
