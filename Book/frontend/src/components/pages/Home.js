import React from 'react';
import '../../App.css'; // Updated import path
// import Cards from '../Cards';
import Footer from '../Footer';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';



function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection/>
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
