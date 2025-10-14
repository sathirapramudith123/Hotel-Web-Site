import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedRooms from '../components/Home/FeaturedRooms';
import Amenities from '../components/Home/Amenities';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedRooms />
      <Amenities />
    </div>
  );
};

export default Home;