import React from 'react';
import Navbar from '../components/NavBar';
import Slider from '../components/Slider';
import CategorySection from '../components/CategorySection';
import FeatureProductSection from '../components/FeatureProductSection';
import Ad from '../components/Ad';
import BestSellers from '../components/BestSellers';

function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <CategorySection />
      <FeatureProductSection
        text="Productos Populares"
        orientation="flex-row"
      />
      <Ad image="/ad1.png" />
      <BestSellers />
      <Ad image="/ad2.png" />
      <FeatureProductSection
        text="Ultimo Productos"
        orientation="flex-row-reverse"
      />
    </>
  );
}

export default HomePage;
