import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next <br /> Great Read</h1>
        <p>Thousands of books at your fingertips. Explore our collection now!</p>
        <div className="hero-btn-container">
          <Button to="/signin" buttonStyle="btn--primary">
            Find a Book  
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
