import React, { useState, useEffect } from "react";
import "./Book.css";
import axios from "axios";
import BookItem from "./BookItem";
import PropTypes from "prop-types";

function Book() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("All");
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false);
    };
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
      const fetchMeds = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/app/meds/");
          setMedicines(response.data.reverse()); // Reverse the array before setting it
        } catch (error) {
          console.error("Error fetching medicines:", error);
        }
      };
  
      fetchMeds();
    }, []);

    BookItem.propTypes = {
        src: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        className: PropTypes.string,
      };

return (
    <div className="content">
      <div className="header-content">
        <div className="search-form-container">
          <form className="search-form">
            <div className="dropdown-container" onClick={toggleDropdown}>
              <div className="dropdown-text">
                <span>{selectedItem}</span>
                <img
                src={isOpen ? "images/dropup.png" : "images/dropdown.png"}
                alt="dropdown-icon"
                className="dropdown-icon"
                />
              </div>
              {isOpen && (
                <ul className="dropdown-list">
                  <li className="dropdown-list-item" onClick={() => handleItemClick("All")}>All</li>
                  <li className="dropdown-list-item" onClick={() => handleItemClick("Title")}>Title</li>
                  <li className="dropdown-list-item" onClick={() => handleItemClick("Author")}>Author</li>
                </ul>
              )}
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button type="submit" className="search-button">
              <img src="images/searchicon.png" alt="search-icon" />
            </button>
          </form>
        </div>
      </div>
    <div className="Book-Section">
            {/* <div className="Book-Header">
                <h1>Your Search Result</h1>
            </div> 
            */}<div className="book-item-container">
                {medicines.map((medicine) => (
                <div className="book-item" key={medicine.medId}>
                    <BookItem
                    src={medicine.image} // Replace 'src' with the image field in your model
                    text={medicine.medName} // Replace 'text' with the name field in your model
                    label="Medicine" // Label or any specific information
                    // path={`/meds/${medicine.medId}`} // Path based on the ID
                    />
                </div>
                ))}
                <div className="book-item">
                    <div className="book-image">
                    <img src="/images/placeholderbook.png" alt="Featured Book 1" className="featured_img"/>
                    </div>
                    <div className="book-content">
                            <div className="book-title">
                            <h6>Book Title</h6>
                            </div>
                            <div className="book-description">
                                <p>Lorem Ipsum</p>
                            </div>
                        <div className="book-rating">
                            <img src="images/star.png" alt="search-icon" />
                            <p>4.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
);

}

export default Book;