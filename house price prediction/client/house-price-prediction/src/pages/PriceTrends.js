import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyPriceTrends from '../components/PropertyPriceTrends';
import PriceTrendCity from '../components/PriceTrendCity';

const PriceTrends = () => {
  return (
    <>
    <Navbar/>
    <PropertyPriceTrends/>
    <PriceTrendCity/>
    <Footer/>
    </>
  )
}

export default PriceTrends