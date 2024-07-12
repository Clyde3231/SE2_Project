import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../NavBarAdmin';
import './BookDetails.css';

function BookDetails() {
  const { key } = useParams();
  const navigate = useNavigate(); 
  const [bookDetails, setBookDetails] = useState(null);
  const [authorDetails, setAuthorDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/book/works/${key}`);
        const data = response.data;
        setBookDetails(data);

        // Extract author key from the first author in the list
        const authorKey = data?.authors?.[0]?.author?.key.replace('/authors/', '');
        if (authorKey) {
          // Fetch author details using the author key
          const authorResponse = await axios.get(`http://127.0.0.1:5000/api/authors/${authorKey}`);
          setAuthorDetails(authorResponse.data);
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
            
           <div className='backBtn'>
          <button className='back-button' onClick={() => navigate(-1)}>Back</button>
          </div>
          </div>
          <div className='book-details-right'>
            <h2>{bookDetails.title}</h2>
            
            {authorDetails ? (
              <div className='book-details-item'>
             <span className='book-detail-label'>
                Author: <a className='book-details-author' href={`https://openlibrary.org${bookDetails.authors[0].author.key}`} target="_blank" rel="noopener noreferrer">
                {authorDetails.name}
              </a> 
              </span> 
              </div>
            ) : (
              <p>Loading author...</p>
            )}

            {/* <div className='book-details-item'>
              <span className='book-detail-label'>First Published Year: </span> 
              <span className='book-detail-desc'>{bookDetails.first_publish_year || 'Unknown'}</span>
            </div>

            <div className='book-details-item'>
              <span className='book-detail-label'>Ratings: </span>
              <span className='book-detail-desc'>{bookDetails.rating ? bookDetails.rating.average.toFixed(1) : 'Not Rated'}</span>
            </div> */}

            <div className='book-details-item'>
              <span className='book-detail-label'>Description: </span>
              <span className='book-detail-desc'>{bookDetails.description ? bookDetails.description.value : 'No description available'}</span>
            </div>

            <div className='book-details-item'>
              <span className='book-detail-label'>Genres: </span>
              <span className='book-detail-desc'>{bookDetails.genres ? bookDetails.genres.join(', ') : 'Unknown'}</span>
            </div>
            
            <div className='book-details-recommendations'>
              <h3>Recommendations</h3>
                <ul className='recomendations-list'>
                      {bookDetails.recommendations && bookDetails.recommendations.length > 0 ? (
                    bookDetails.recommendations.map((recBook, index) => (
                      <li key={index}>
                        <Link to={`/book/works/${recBook.key.replace('/works/', '')}`}>{recBook.title}</Link>
                      </li>
                    ))
                  ) : (
                    <p>No recommendations available</p>
                  )}
                </ul>
            </div>
            
          </div>
        </div>
      ) : (
        <p className='loading'>Loading...</p>
      )}
    </div>
  );
}

export default BookDetails;
