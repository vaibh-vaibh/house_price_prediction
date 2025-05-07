import React from 'react';
import {Link} from 'react-router-dom';

const Company = () => {
  return (
   <>
   <div className="col-md-4 mb-3">
                <h5 className="text-uppercase py-2">Company</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/terms-and-conditions" className="text-white text-decoration-none">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/reviews" className="text-light text-decoration-none">
                     Reviews & Feedback
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:aitools4616@gmail.com?Subject=Report a problem" className="text-white text-decoration-none">
                      Report a problem
                    </Link>
                  </li>
                 
                  <li>
                    <Link to="/privacy-policy" className="text-white text-decoration-none">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
   </>
  )
}

export default Company