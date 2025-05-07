import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RatingStar from '../components/RatingStar';
import ReviewsRating from '../components/ReviewsRating';

const Reviews = () => {
  return (
    <>
    <Navbar/>
    <ReviewsRating/>
    <RatingStar/>
    <Footer/>
    </>
  )
}

export default Reviews