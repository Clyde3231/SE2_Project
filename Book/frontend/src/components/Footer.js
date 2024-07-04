import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className="footer-container">
      <div className="footer-text"> 
            © READER'S REALM 2024
      </div>
{/*      
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/aboutus">Our Beginnings</Link>
            <Link to="/aboutus">Meet the Team</Link>
            {/* <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link> 
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contactus">Contact</Link>
            <Link to="/contactus">Support</Link>
            {/* <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link> 
          </div>
        </div>

      </div> 
      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className="footer-logo">
            <Link to="/" className="social-logo">
            Reader's Realm
              <i className="fab fa-react"></i>
            </Link>
           </div> 
          <small className="website-rights">Reader's Realm © 2024</small>
        </div>
      </section>*/}

    </div>

  );
}

export default Footer;