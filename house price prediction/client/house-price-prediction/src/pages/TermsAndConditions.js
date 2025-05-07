import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import {Container} from 'react-bootstrap';
import Terms from '../components/Terms';
import Introduction from '../components/Introduction';
import Definition from '../components/Definition';
import IntellectualRights from '../components/IntellectualRights';
import Termination from '../components/Termination';
import Restriction from '../components/Restriction';

const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
    <Breadcrumb/>
    <Container className="my-4 px-5 ">
      <Terms/>
      <Introduction/>
      <Definition/>
      <IntellectualRights/>
      <Restriction/>
      <Termination/>
    </Container>
    <Footer/>
    </>
  )
}

export default TermsAndConditions