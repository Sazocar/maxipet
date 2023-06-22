import React from 'react';
import Navbar from '../components/NavBar';
import Slider from '../components/Slider';
import CategorySection from '../components/CategorySection';
import FeatureProductSection from '../components/FeatureProductSection';

function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <CategorySection />
      <FeatureProductSection />
    </>
  );
}

export default HomePage;
