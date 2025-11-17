import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Section.scss"
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import './Section.scss';

const data = [
  {
    id: 1,
    image: '/registan.jpg', // public/registan.jpg
    title: 'Discover the Majesty of Registan',
    subtitle: 'Step into the heart of ancient Samarkand, where history and architecture unite.'
  },
  {
    id: 2,
    image: '/khiva.jpg',
    title: 'Journey to the Walled City of Khiva',
    subtitle: 'Explore the ancient streets of Ichan Kala, a living museum under the open sky.'
  },
  {
    id: 3,
    image: '/tj2.jpg',
    title: 'Embrace the Beauty of Tadjikistan',
    subtitle: 'From majestic mountains to rich traditions — an unforgettable adventure awaits.'
  },
  {
    id: 4,
    image: '/amirsay.jpg',
    title: 'Chill and Thrill at Amirsoy Resort',
    subtitle: 'Experience the perfect winter escape with breathtaking views and snowy adventures.'
  }
];

const Section = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="section-carousel"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        navigation={true}
        className="swiper-container"
      >
        {data.map(item => (
          <SwiperSlide key={item.id}>
            <div className="slide-wrapper">
              <img className="slide-image" src={item.image} alt={item.title} />
              <div className="slide-content">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Section;
