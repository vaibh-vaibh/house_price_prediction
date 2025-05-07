import React from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import AboutHeaderCard from '../components/AboutHeaderCard';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <Navbar/>
    <Breadcrumb/>
    <Container className="my-4 px-5">
      <AboutHeaderCard/>
    </Container>
    <Footer/>
    </>
  )
}

export default About