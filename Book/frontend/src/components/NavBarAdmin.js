import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setDropdown(!dropdown);


  const navigate = useNavigate();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest('.nav-admin-item')) {
        setDropdown(false);
      }
    };
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/HomeAdmin" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/bookLogo.png" alt="Logo" />
          </Link>
          <ul className={click ? "nav-admin-menu active" : "nav-admin-menu"}>
            <li className="nav-admin-item">
              <div className="nav-findbook-container">
                <div className="nav-findbook-text" onClick={() => navigate('/findbook')}>
                  <span>Find Book</span>
                </div>
              </div>
            </li>
            <li className="nav-admin-item">
              <div className="nav-admin-links-drop" >
                <i className="fas fa-bars" onClick={toggleDropdown}/>
              </div>
              {dropdown && (
                  <ul className="nav-profile-dropdown-menu">
                    <li className="nav-profile-dropdown-items" onClick={() => navigate('/homeadmin')}>Edit Profile</li>
                    <li className="nav-profile-dropdown-items" onClick={() => navigate('/')}>Log Out</li>
                  </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;