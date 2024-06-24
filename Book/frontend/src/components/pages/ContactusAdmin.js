import React from "react";
import "../../App.css"; // Updated import path
import Contact from "../Contact";
import Footer from "../Footer";
import Navbar from "../NavBarAdmin";

export default function Contactus() {
  return (
    <>
        <Navbar/>

      <Contact />
      <Footer />
    </>
  );
}
