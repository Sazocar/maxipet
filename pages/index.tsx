import React from 'react';
import Navbar from '../components/NavBar';
import Slider from '../components/Slider';
import CategorySection from '../components/CategorySection';
import FeatureProductSection from '../components/FeatureProductSection';
import Ad from '../components/Ad';

function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <CategorySection />
      <FeatureProductSection />
      <Ad image="/ad1.png" />
      <Ad image="/ad2.png" />
    </>
  );
}

export default HomePage;
