import React from "react";
import {Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="container my-4">
      <h2 className="text-primary">Introduction</h2>
      <div className="card p-3 shadow-sm">
      <p>
  All logos, brands, trademarks, and service marks (<strong>"Marks"</strong>) appearing on <strong>VPHomes</strong> are the exclusive property of IEIL and/or its associates, either owned or used under license. All rights related to these Marks, whether statutory or otherwise, wholly vest with IEIL or its associates.  
</p>

<p>
  Access to <strong>VPHomes</strong> does not grant the User any license or right to use these Marks in any form or manner. Any unauthorized use of these Marks is strictly prohibited and may constitute a violation under the prevailing laws of India.
</p>

<p>
  IEIL respects the intellectual property rights of all and remains committed to adhering to all applicable laws in India. It ensures the protection and enforcement of intellectual property rights for both users and third parties. 
</p>

<p>
  If any user is found using <strong>VPHomes</strong> to infringe the intellectual property rights of others, IEIL reserves the right to terminate this Agreement without prior notice.
</p>

<p>
  By allowing users to access <strong>VPHomes</strong>, IEIL grants a limited, non-exclusive, non-assignable, and revocable license (<strong>“License”</strong>) to access and use the services, provided that the user remains in compliance with the terms and conditions of this Agreement.
</p>
<p>
  These terms and conditions, along with the <Link to="/privacy-policy" className="text-decoration-none text-primary">privacy policy </Link> and community guidelines governing the use of these services, constitute a legally binding agreement between VPHomes and the User (the “Agreement”).
</p>


        </div>
    </div>
  );
};

export default Introduction;
