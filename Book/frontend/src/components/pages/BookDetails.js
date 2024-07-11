import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../NavBarAdmin';
import './BookDetails.css';

function BookDetails() {
  const { key } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [authorName, setAuthorName] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/works/${key}.json`);
        setBookDetails(response.data);
        
        // Extract author key from the first author in the list
        const authorKey = response.data?.authors?.[0]?.author?.key;
        if (authorKey) {
          // Fetch author details using the author key
          const authorResponse = await axios.get(`https://openlibrary.org${authorKey}.json`);
          setAuthorName(authorResponse.data.name);
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [key]);

  return (
    <div>
      <Navbar />
      {bookDetails ? (
        <div className='book-details-container'>
          <div className='book-details-left'>
            {bookDetails.covers && (
              <img
                src={`http://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
                alt={`${bookDetails.title} cover`}
                className='book-details-img'
              />
            )}
            
            <Link to='/FindBook' className='back-button'>Back</Link>
          </div>
          <div className='book-details-right'>
            <h2>{bookDetails.title}</h2>
            
            {authorName ? (
              <div className='book-details-item'>
             <span className='book-detail-label'>
                Author: <a className='book-detail-author' href={`https://openlibrary.org${bookDetails.authors[0].author.key}`} target="_blank" rel="noopener noreferrer">{authorName}</a> 
              </span> 
              </div>
            ) : (
              <p>Loading author...</p>
            )}

            <div className='book-details-item'>
              <span className='book-detail-label'>First Published Year: </span> 
              <span className='book-detail-desc'>{bookDetails.first_publish_year || 'Unknown'}</span>
            </div>

            <div className='book-details-item'>
              <span className='book-detail-label'>Ratings: </span>
              <span className='book-detail-desc'>{bookDetails.rating ? bookDetails.rating.average.toFixed(1) : 'Not Rated'}</span>
            </div>

            <div className='book-details-item'>
              <span className='book-detail-label'>Description: </span>
              <span className='book-detail-desc'>{bookDetails.description ? bookDetails.description.value : 'No description available'}</span>
            </div>

            <div className='book-details-item'>
              <span className='book-detail-label'>Genres: </span>
              <span className='book-detail-desc'>{bookDetails.subjects ? bookDetails.subjects.join(', ') : 'Unknown'}</span>
            </div>
            
            
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetails;
