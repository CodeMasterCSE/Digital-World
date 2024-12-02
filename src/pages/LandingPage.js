import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesOverview from '../components/FeaturesOverview/FeaturesOverview';
import './LandingPage.css';

const LandingPage = ({ isDarkMode }) => {
  return (
    <div className="landing-page">
      <HeroSection isDarkMode={isDarkMode} />
      <FeaturesOverview isDarkMode={isDarkMode} />
    </div>
  );
};

export default LandingPage; 