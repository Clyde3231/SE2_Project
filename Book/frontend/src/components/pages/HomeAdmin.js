import React from 'react';
import '../../App.css'; // Updated import path
import HeroSectionAdmin from './HeroSectionAdmin';
import Cards from '../Cards';
import Footer from '../Footer';
import Navbar from '../NavBarAdmin';



function Home() {
  return (
    <>
    <Navbar/>
      <HeroSectionAdmin/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
