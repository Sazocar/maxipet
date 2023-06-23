import React from 'react';
import Navbar from '../components/NavBar';
import Slider from '../components/Slider';
import CategorySection from '../components/CategorySection';
import FeatureProductSection from '../components/FeatureProductSection';
import Ad from '../components/Ad';
import BestSellers from '../components/BestSellers';
import ServicesList from '../components/ServicesList';
import Brands from '../components/Brands';
import Footer from '../containers/Footer';
import Copyright from '../components/Copyright';

function HomePage() {
  return (
    <>
      <Navbar />
      <Slider />
      <CategorySection />
      <FeatureProductSection
        text="Productos Destacados"
        orientation="flex-row"
      />
      <Ad image="/ad1.png" />
      <BestSellers />
      <Ad image="/ad2.png" />
      <FeatureProductSection
        text="Ultimo Productos"
        orientation="flex-row-reverse"
      />
      <ServicesList />
      <Brands />
      <Footer />
      <Copyright />
    </>
  );
}

export default HomePage;
