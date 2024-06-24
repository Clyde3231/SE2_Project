import React from "react";
import '../../App.css'; // Updated import path
import About from '../About';
import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Aboutus() {
  return (
    <>
      <Navbar/>
      <About />
      <Footer/>
    </>
  );
}
