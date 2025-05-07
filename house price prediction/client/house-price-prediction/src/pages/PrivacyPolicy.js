import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import {Container} from 'react-bootstrap';
import Privacy from '../components/Privacy';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <Breadcrumb/>
    <Container className="my-4 px-5 ">
    <Privacy/>
    <PrivacyPolicyContent/>
        </Container>
    <Footer/>
</>
  )
}

export default PrivacyPolicy