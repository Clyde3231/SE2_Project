// BookItem.js
import React from "react";
import "./Book.css"; // Import CSS for BookItem
import { Link } from "react-router-dom";

function BookItem({ src, text, label, path, className }) {
  return (
    <>
  <Link to={path} className="book-item-link">
        <img src={src} alt={text} className="book-image" />
        <div className="book-content">
          <div className="book-title">
            <h6>{text}</h6>
          </div>
        </div>
    </Link>
        {/* <div className="book-description">
          <span>{label}</span>
        </div> */}
        {/* <div className="book-rating">
          <p>View Details</p>
        </div> */}
    </>
  );
}


export default BookItem;
