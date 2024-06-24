import React from "react";
import '../../App.css'; // Updated import path
import Footer from "../Footer";
import MedsList from "../MedsList";
import Navbar from "../Navbar";

function Product() {
  return (
    <>
    <Navbar/>
      <MedsList />
      <Footer />
    </>
  );
}

export default Product;
