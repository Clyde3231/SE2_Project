import React from "react";
import "../../App.css"; // Updated import path
import Contact from "../Contact";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Contactus() {
  return (
    <>
        <Navbar/>

      <Contact />
      <Footer />
    </>
  );
}
