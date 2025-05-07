import React from 'react';
import {Link} from 'react-router-dom';

const VPHomes = () => {
    return (
<div className="col-md-4 mb-3">
<h5 className="text-uppercase py-2">VPHomes</h5>
<ul className="list-unstyled">
  
  <li>
    <Link to="/price-trends" className="text-white text-decoration-none">
      Price Trends
    </Link>
  </li>
  <li>
    <Link to="https://www.google.com/search?q=area+converter+online" target="_blank" className="text-white text-decoration-none">
      Area Converter
    </Link>
  </li>
</ul>
</div>
    );
}

export default VPHomes;