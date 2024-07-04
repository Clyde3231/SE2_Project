import React from 'react';
import '../../App.css'; // Updated import path
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';



function Home() {
  return (
    <>
      <div className='home-screen'>
    <Navbar/>
      <HeroSection />
      <Footer />
      </div>
    </>
    
  );
}

export default Home;
