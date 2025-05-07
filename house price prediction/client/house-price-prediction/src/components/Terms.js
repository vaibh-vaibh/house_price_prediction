import React from 'react'
import {Link} from 'react-router-dom';

const Terms = () => {
  return (
    <>
          <div>
            <img
              src="/images/termcondition.jpg"
              alt="Terms & Conditions"
              style={{width: '100%'}}
            />
          </div>
          
        <div className="text-secondary mt-5 outline-dark mb-5 card p-3 shadow-sm mt-3">
        <p className="mb-1">
          Please read this document carefully. By accessing or using VPHomes,{" "}
          <span className="fw-bold text-primary">
            you agree to be bound by the terms and conditions
          </span>{" "}
          set forth below. If you do not agree with any of these terms and
          conditions, you should not access or use VPHomes.
        </p>
        <p className="mb-1">
          If you have any questions about these terms, please contact{" "}
          <Link to="mailto:aitools4616@gmail.com?Subject=Report Inappropriate Content" className=" text-decoration-none">
                legal@VPHomes.com
              </Link>
        </p>
      </div>
    </>
  )
}

export default Terms