import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./HeroSectionAdmin.css";

function HeroSectionAdmin() {
  return (
    <div className="hero-container">
      {/* Background image */}
      <img src="/images/booksBG.png" alt="Books background" />

      {/* Heading and paragraph */}
      <div className="hero-content">
        <h1>Discover Your Next <br></br> Great Read</h1>
        <p>Thousands of books at your fingertips. Explore our collection now.</p>
      </div>

      {/* Button */}
      <div className="hero-btns">
        <Button
          to="/products"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log("hey")}>
          Find a Book <i class="fa-sharp fa-thin fa-books"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionAdmin;
