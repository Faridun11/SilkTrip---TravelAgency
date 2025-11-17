import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Navigation va Pagination qo'shildi
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ActiveVideos.scss";

const videos = [
  {
    id: 1,
    title: "Amir Temur ( The Great Temurlane)",
    url: "https://www.youtube.com/embed/WsJzTRYi7BA?enablejsapi=1&origin=https://silkroadheritage.uz",
  },
  {
    id: 2,
    title: "Shakhi Zinda Complex (street of mausleums)",
    url: "https://www.youtube.com/embed/73SAOMLEIH0?enablejsapi=1&origin=https://silkroadheritage.uz",
  },
  {
    id: 3,
    title: "Visit Uzbekistan – discover old Silk Road 😍 Amazing foods, beautiful nature, stunning architecture✅",
    url: "https://www.youtube.com/embed/rEyGJ5MDdaY?enablejsapi=1&origin=https://silkroadheritage.uz",
  },
  {
    id: 4,
    title: "The great #silkroad: ancient historical cities, modern high-speed trains, delicious foods waiting!",
    url: "https://www.youtube.com/embed/-NyRDPk9cus?enablejsapi=1&origin=https://silkroadheritage.uz",
  },
  {
    id: 5,
    title: "The amazing plan of tour to beautiful Uzbekistan 😍",
    url: "https://www.youtube.com/embed/rpIJT1lULQ8?enablejsapi=1&origin=https://silkroadheritage.uz",
  },
  {
    id: 6,
    title: "POV: You visited Central Asia😂",
    url: "https://www.youtube.com/embed/51rKAu18DFE?enablejsapi=1&origin=https://silkroadheritage.uz",
  },
];


const ActiveVideos = () => {
  const iframeRefs = useRef([]);

  const pauseAllVideos = () => {
    iframeRefs.current.forEach((iframe) => {
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "pauseVideo",
            args: [],
          }),
          "*"
        );
      }
    });
  };

  return (
    <motion.div
      className="active-videos"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section-title"> Here you can watch about our job </h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={24}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          onSlideChange={pauseAllVideos}
          className="video-swiper"
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <div className="video-card">
                <div className="video-frame">
                  <iframe
                    ref={(el) => (iframeRefs.current[index] = el)}
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3>{video.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ActiveVideos;