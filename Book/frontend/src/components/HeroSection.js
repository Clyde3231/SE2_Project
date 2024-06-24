import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/doc1.mp4" autoPlay loop muted />
      <h1>Welcome to St. John's PharmAssist!</h1>
      <p>We're always ready to assist!</p>
      <div className="hero-btns">
        <Button
          to="/aboutus"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          ABOUT US <i className="far fa-address-card" />
        </Button>

        <Button
          to="/products"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log("hey")}
        >
          OUR PRODUCTS <i className="fas fa-capsules" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
