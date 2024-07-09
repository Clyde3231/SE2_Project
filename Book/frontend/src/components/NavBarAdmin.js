import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownBooks, setDropdownBooks] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleDropdown = () => setDropdown(!dropdown);
  const closeDropdown = () => setDropdown(!dropdown);
  const toggleDropdown = () => setDropdown(!dropdown);
  const toggleDropdownBooks = () => setDropdownBooks(!dropdownBooks);
  const closeDropdownBooks = () => setDropdownBooks(false);


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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <a>
              <img src="/images/newLogo.png" alt="Logo" />
            </a>
            {/* <i className="fab fa-react"></i> */}
          </Link>




          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search..." className="search-input" />
           
          </div>


       
         
          <ul className={click? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <div className="nav-links-select" onClick={toggleDropdownBooks}>
                <span>Select</span>
                <i className="fas fa-chevron-down arrow-down-icon" />
              </div>
              {dropdownBooks && (
                <div className="dropdown-menu" onClick={closeDropdownBooks}>
                  <Link to="/findbook" className="dropdown-item" onClick={closeMobileMenu}>
                    Find a Book
                  </Link>
                  <Link to="/findauthor" className="dropdown-item" onClick={closeMobileMenu}>
                    Find an Author
                  </Link>
                </div>
              )}
            </li>


           


           


            {/* <li className="nav-item">
              <Link
                to="/Admin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li> */}


            {/* <li className="nav-item">
              <Link
                to="/aboutusAdmin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>


            <li className="nav-item">
              <Link
                to="/contactusAdmin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li> */}
             <li className="nav-item">
            <div className="nav-links-drop" onClick={(e) => {
             
                    toggleDropdown();
                    if (dropdown) {
                      closeDropdown();
                    }
                  }}>
                 <i className="fas fa-bars" />
              </div>
              {dropdown && (
                <div className="dropdown-menu" onClick={closeDropdown}>
                  <Link to="/Edit" className="dropdown-item" onClick={closeMobileMenu}>
                    Edit Profile
                  </Link>
                  <Link to="/" className="dropdown-item" onClick={closeMobileMenu}>
                    Log out
                  </Link>
                </div>
              )}
            </li>
             
          </ul>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
