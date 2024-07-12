import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";


function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next <br /> Great Read</h1>
        <p>Thousands of books at your fingertips. Explore our collection now!</p>
        <div className="hero-btn-container">
          <Button to="/signin" buttonStyle="btn--primary">
            Enter Now  
          </Button>
        </div>
      </div>
    </div>
  );
}


export default HeroSection;
