import React from 'react';
import '../../App.css'; // Updated import path
// import Cards from '../Cards';
import Footer from '../Footer';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';



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
