import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards() {
  const [highestRatedBooks, setHighestRatedBooks] = useState([]);

  useEffect(() => {
    const fetchHighestRatedBooks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/highest_rated');
        setHighestRatedBooks(response.data);
      } catch (error) {
        console.error('Error fetching highest rated books:', error);
      }
    };

    fetchHighestRatedBooks();
  }, []);

  return (
    <section className="section_featured">
      <h2 className="section_title">Highest Rated Books</h2>

      <div className="featured_container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {highestRatedBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <Link to={`/book${book.key}`}>
                <article className="featured_card">
                  <img
                     src={book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : '/images/placeholderbook.png'}
                    alt={`${book.title} cover`}
                    className="featured_img"
                  />
                  <h2 className="featured_title">{book.title}</h2>
                  <p className="featured_author">{book.author ? book.author : 'Unknown'}</p>
                  <p className="featured_rating">Rating: {book.rating}</p>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Cards;
