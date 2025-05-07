import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <h1 className="animated-text mt-1 mb-0">VPHomes</h1>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={ `collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 gap-lg-5 fs-4">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
                </li>
            <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQ</Link>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
