import React from "react";
import "../../App.css";
import "./HeroSectionAdmin.css";

function HeroSectionAdmin() {
  return (
    <div className="hero-container">
      <img src="/images/booksBG.png" alt="Books background" className="adminBG"/>

      <div className="adminContent">
        <h1>Discover Your Next <br /> Great Read</h1>
        <p>Thousands of books at your fingertips. Explore our collection now!</p>
      </div>

    </div>
  );
}

export default HeroSectionAdmin;
