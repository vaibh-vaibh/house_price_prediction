import React from 'react'
import {Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <>
     <div className="col-md-4">
            <h5 className="text-uppercase py-1">Contact Us</h5>
            <p className="mb-1">9:30 AM to 6:30 PM (Mon-Sun)</p>
            <p className="mb-3">Email - aitools4616@gmail.com</p>
            <h5 className="text-uppercase">Connect with us</h5>
            <p className="small">
              Usage of VMHomes.com to upload content showing area in non standard units or which enables targeting by religion/community/caste/race is prohibited. Please report inappropriate content by writing to us at{" "}
              <Link to="mailto:aitools4616@gmail.com?Subject=Report Inappropriate Content" className=" text-decoration-none">
                report abuse
              </Link>
            </p>
            <p className="small">
              All trademarks are the property of their respective owners.
              <br />
              All rights reserved - Info Edge (India) Ltd.
            </p>
          </div>
    </>
  )
}

export default ContactUs