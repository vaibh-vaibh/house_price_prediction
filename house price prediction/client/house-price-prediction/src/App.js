import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import FAQ from '../src/pages/FAQ';
import Services from '../src/pages/Services';
import ResultPage from '../src/components/ResultPage';
import './App.css';
import PriceTrends from '../src/pages/PriceTrends';
import PriceTrendinBangalore from '../src/pages/PriceTrendinBangalore';
import PriceTrendinMumbai from '../src/pages/PriceTrendinMumbai';
import PriceTrendinChennai from '../src/pages/PriceTrendinChennai';
import PriceTrendinDelhi from '../src/pages/PriceTrendinDelhi';
import PriceTrendinHyderabad from '../src/pages/PriceTrendinHyderabad';
import PriceTrendinKolkata from '../src/pages/PriceTrendinKolkata';
import Reviews from '../src/pages/Reviews';
import TermsAndConditions from '../src/pages/TermsAndConditions';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';

const App = () => {

  return (
    <Router>
      <Routes>
        < Route path="/" element={<Home />}/>
        < Route path="/about" element={<About />} />
        < Route path="/services" element={<Services />} />
        < Route path="/services/result" element={<ResultPage />} />
        < Route path="/faq" element={<FAQ />} />

        {/* Price Trend */}
        < Route path="/price-trends" element={<PriceTrends />} />

        {/* Price Trend in Area Wise */}
        <Route path="/price-trends/price-trends-in-bangalore" element={<PriceTrendinBangalore />}  />
        <Route path ="/price-trends/price-trends-in-mumbai" element={<PriceTrendinMumbai />} />
        <Route path ="/price-trends/price-trends-in-delhi" element={<PriceTrendinDelhi />} />
        <Route path ="/price-trends/price-trends-in-kolkata" element={<PriceTrendinKolkata />} />
        <Route path ="/price-trends/price-trends-in-chennai" element={<PriceTrendinChennai />} />
        <Route path ="/price-trends/price-trends-in-hyderabad" element={<PriceTrendinHyderabad />} />

        {/* Main Privacy policy and Reviews */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/terms-and-conditions" element = {<TermsAndConditions />} />
        <Route path="/privacy-policy" element = {<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
