import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useNavigate, useLocation } from 'react-router-dom';
import "./Navbar.css";
import axios from "axios";


function Navbar() {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownBooks, setDropdownBooks] = useState(false);
  //Burger Menu Dropdown
  
  const handleClick = () => setClick(!click);
  const handleDropdown = () => setDropdown(!dropdown);
  const closeDropdown = () => setDropdown(!dropdown);
  const closeMobileMenu = () => setClick(false);


  // const toggleDropdownBooks = () => setDropdownBooks(!dropdownBooks);
  const closeDropdownBooks = () => setDropdownBooks(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [results, setResults] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('All');
  const navigate = useNavigate();




  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query');
  const type = queryParams.get('type');

  // const fetchResults = async (query, type) => {
  //   try {
  //       const response = await axios.get('/search', { params: { query, type } });
  //       setResults(response.data || []);
  //   } catch (error) {
  //       console.error('Error fetching data:', error);
  //   }
  //   };

    useEffect(() => {
      const closeDropdown = (e) => {
        if (!e.target.closest('.nav-dropdown-container')) {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener('click', closeDropdown);
      return () => document.removeEventListener('click', closeDropdown);
    }, []);

    useEffect(() => {
      const setDefault = async () => {
        try {
          const response = await axios.get('/search', { params: { query, type } });
          setResults(response.data || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };    

    setDefault();
  }, [query, type]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/FindBook?query=${encodeURIComponent(searchQuery)}&type=${searchType.toLowerCase()}`);
    }
  };

  const toggleDropdownBooks = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (item) => {
    setSearchType(item);
    setIsDropdownOpen(false);
  };

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
              <img src="/images/bookLogo.png" alt="Logo" />
            {/* <i className="fab fa-react"></i> */}
          </Link>

          <ul className={click? "nav-admin-menu active" : "nav-admin-menu"}>
          <li className="nav-admin-item">
              {/* <div className="nav-dropdown-container" onClick={toggleDropdownBooks}>
                <span>Select</span>
                <i className="fas fa-chevron-down arrow-down-icon" />
              </div> */}
                <div className="nav-dropdown-container" >
                <div className="nav-dropdown-text" onClick={toggleDropdownBooks}>
                  <span>{searchType}</span>
                  <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'} arrow-icon`} />
                </div>
                {isDropdownOpen && (
                  <ul className="nav-dropdown-list">
                    <li className="nav-dropdown-list-item" onClick={() => handleDropdownItemClick("All")}>All</li>
                    <li className="nav-dropdown-list-item" onClick={() => handleDropdownItemClick("Title")}>Title</li>
                    <li className="nav-dropdown-list-item" onClick={() => handleDropdownItemClick("Author")}>Author</li>
                  </ul>
                )}
              </div>
              
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
             <li className="nav-admin-item">
            <div className="nav-admin-links-drop" onClick={(e) => {
             
                    toggleDropdownBooks();
                    if (dropdownBooks) {
                      closeDropdownBooks();
                    }
                  }}>
                 <i className="fas fa-bars" />
              </div>
              {dropdown && (
                <div className="nav-profile-dropdown-menu" onClick={closeDropdownBooks}>
                  <Link to="/Edit" className="nav-profile-dropdown-item" onClick={closeMobileMenu}>
                    Edit Profile
                  </Link>
                  <Link to="/" className="nav-profile-dropdown-item" onClick={closeMobileMenu}>
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
