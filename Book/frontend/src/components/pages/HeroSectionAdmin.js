import React from "react";
import "../../App.css";
import "./HeroSectionAdmin.css";
// import { Button } from "../Button";

function HeroSectionAdmin() {
  return (
    <div className="hero-admin-container">


      {/* Heading and paragraph */}
      <div className="hero-admin-content">
        <h1>Discover Your Next <br></br> Great Read</h1>
        <p>Thousands of books at your fingertips. Explore our collection now!</p>
        {/* <div className="hero-admin-btns">
          <Button to="/signin" buttonStyle="btn--primary">
            Find a Book  
          </Button>
      </div> */}
      </div>
    </div>
  );
}

export default HeroSectionAdmin;