import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState(""); // State to manage the value of the email input
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    setEmail("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          St. John's PharmAssist: Always Ready to Assist!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
          <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
              value={email} // Bind the value to the state
              onChange={handleInputChange} // Handle input changes
            />
            <button type="submit" onClick={handleSubscribeClick} className="footer-button">

              Subscribe 
            </button>
 
          </form>
        </div>
      </section>

      
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/aboutus">Our Beginnings</Link>
            <Link to="/aboutus">The Story Behind the Name</Link>
            <Link to="/aboutus">Meet the Team</Link>
            {/* <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link> */}
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contactus">Contact</Link>
            <Link to="/contactus">Support</Link>
            {/* <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link> */}
          </div>
        </div>
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              St. John's PharmAssist
              <i className="fab fa-react"></i>
            </Link>
          </div>
          <small className="website-rights">St. John's PharmAssist © 2023</small>

          {/* DELETE THIS */}
          {/* <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div> */}
          {/* END */}
        </div>
      </section>

{/* Bootstrap Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Subscription Successful!</h5>
              {/* <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button> */}
            </div>

            <div className="modal-body">
              Thank you for subscribing to St. John's PharmAssist!
            </div>

            <div className="modal-footer">
              <button type="button" className="modal-button" onClick={handleCloseModal} > Close </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;