// BookItem.js
import React from "react";
import "./Book.css"; // Import CSS for BookItem

function BookItem({ src, text, label, path, className }) {
  return (
    <>
      <div>
        <img src={src} alt={text} className={`book-image ${className}`} />
      </div>
      <div className="book-content">
        <div className="book-title">
          <h6>{text}</h6>
        </div>
        {/* <div className="book-description">
          <span>{label}</span>
        </div> */}
        {/* <div className="book-rating">
          <p>View Details</p>
        </div> */}
      </div>
    </>
  );
}


export default BookItem;
