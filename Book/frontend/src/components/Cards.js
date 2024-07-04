import React from 'react';
import './Cards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function Cards() {
  return (
    <section className="section_featured">
      <h2 className="section_title">
        Featured Books
        </h2>

      <div className="featured_container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          
        >
          <SwiperSlide>
            <article className="featured_card">
              <img src="/images/placeholderbook.png" alt="Featured Book 1" className="featured_img"/>
              <h2 className="featured_title">Featured Book 1</h2>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="featured_card">
              <img src="/images/placeholderbook.png" alt="Featured Book 2" className="featured_img"/>
              <h2 className="featured_title">Featured Book 2</h2>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="featured_card">
              <img src="/images/placeholderbook.png" alt="Featured Book 3" className="featured_img"/>
              <h2 className="featured_title">Featured Book 3</h2>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="featured_card">
              <img src="/images/placeholderbook.png" alt="Featured Book 4" className="featured_img"/>
              <h2 className="featured_title">Featured Book 4</h2>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="featured_card">
              <img src="/images/placeholderbook.png" alt="Featured Book 5" className="featured_img"/>
              <h2 className="featured_title">Featured Book 5</h2>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="featured_card">
              <img src="/images/bookcover1.jpg" alt="Featured Book 6" className="featured_img"/>
              <h2 className="featured_title">Featured Book 6</h2>
            </article>
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
}

export default Cards;