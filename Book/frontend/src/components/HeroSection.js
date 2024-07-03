import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/booksBG.png" alt="Books background" className="hero-image"/>

      <div className="hero-content">
        <h1>Discover Your Next <br /> Great Read</h1>
        <p>Thousands of books at your fingertips. Explore our collection now!</p>
      </div>

      <div className="hero-btns" >
        <Button to="/signin" buttonStyle="btn--primary">
          Find a Book  
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
