import React, { useState } from 'react';
import './Clients.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const imageList = [
  { url: 'https://i.postimg.cc/52hm3tct/3.jpg', alt: 'Client Image 3' },
  { url: 'https://i.postimg.cc/zvPHvLDm/img-1.jpg', alt: 'Client Image 1' },
  { url: 'https://i.postimg.cc/ZKqg68pK/4.jpg', alt: 'Client Image 4' },
  { url: 'https://i.postimg.cc/vTKvrVw1/5.jpg', alt: 'Client Image 5' },
  { url: 'https://i.postimg.cc/qvDDrQHC/img-2.jpg', alt: 'Client Image 2' },
  { url: 'https://i.postimg.cc/Dz71bg44/6.jpg', alt: 'Client Image 6' },
  { url: 'https://i.postimg.cc/L54HtJBN/7.jpg', alt: 'Client Image 7' },
  { url: 'https://i.postimg.cc/v811SjrM/8.jpg', alt: 'Client Image 8' },
  { url: 'https://i.postimg.cc/mkxTnd4W/10.jpg', alt: 'Client Image 10' },
  { url: 'https://i.postimg.cc/MHRpZC58/9.jpg', alt: 'Client Image 9' },
  { url: 'https://i.postimg.cc/gjK1K4kt/11.jpg', alt: 'Client Image 11' },
  { url: 'https://i.postimg.cc/7Z5QCq7j/12.jpg', alt: 'Client Image 12' },
  { url: 'https://i.postimg.cc/pdDC8rd4/13.jpg', alt: 'Client Image 13' },
  { url: 'https://i.postimg.cc/CKHC52v9/14.jpg', alt: 'Client Image 14' },
  { url: 'https://i.postimg.cc/SKy2TxrL/15.jpg', alt: 'Client Image 15' },
  { url: 'https://i.postimg.cc/5y120PRL/17.jpg', alt: 'Client Image 17' },
  { url: 'https://i.postimg.cc/PJhK5nWB/62.jpg', alt: 'Client Image 62' },
  { url: 'https://i.postimg.cc/DwhPhF6q/16.jpg', alt: 'Client Image 16' },
  { url: 'https://i.postimg.cc/QxdjyWGC/19.jpg', alt: 'Client Image 19' },
  { url: 'https://i.postimg.cc/bwdNsS33/18.jpg', alt: 'Client Image 18' },
  { url: 'https://i.postimg.cc/Fz2G3L0B/21.jpg', alt: 'Client Image 21' },
  { url: 'https://i.postimg.cc/W10YmXWs/20.jpg', alt: 'Client Image 20' },
  { url: 'https://i.postimg.cc/3x6pRTCC/22.jpg', alt: 'Client Image 22' },
  { url: 'https://i.postimg.cc/7LtxDHgR/28.jpg', alt: 'Client Image 28' },
  { url: 'https://i.postimg.cc/k4wg2N3s/24.jpg', alt: 'Client Image 24' },
  { url: 'https://i.postimg.cc/k5vnHN4c/25.jpg', alt: 'Client Image 25' },
  { url: 'https://i.postimg.cc/1XkhX4td/27.jpg', alt: 'Client Image 27' },
  { url: 'https://i.postimg.cc/gkLGpbj9/26.jpg', alt: 'Client Image 26' },
  { url: 'https://i.postimg.cc/d1GS6ntR/29.jpg', alt: 'Client Image 29' },
  { url: 'https://i.postimg.cc/9XJD02cY/23.jpg', alt: 'Client Image 23' },
  { url: 'https://i.postimg.cc/28NZLDJ8/35.jpg', alt: 'Client Image 35' },
  { url: 'https://i.postimg.cc/VvY4R8hW/30.jpg', alt: 'Client Image 30' },
  { url: 'https://i.postimg.cc/T17jJWm0/32.jpg', alt: 'Client Image 32' },
  { url: 'https://i.postimg.cc/7ZC9XXK3/31.jpg', alt: 'Client Image 31' },
  { url: 'https://i.postimg.cc/1z36Rrdp/34.jpg', alt: 'Client Image 34' },
  { url: 'https://i.postimg.cc/XJh9zBQ9/33.jpg', alt: 'Client Image 33' },
  { url: 'https://i.postimg.cc/8cSzc151/36.jpg', alt: 'Client Image 36' },
  { url: 'https://i.postimg.cc/NfNQq81v/37.jpg', alt: 'Client Image 37' },
  { url: 'https://i.postimg.cc/MH7bfKmc/38.jpg', alt: 'Client Image 38' },
  { url: 'https://i.postimg.cc/prpr8pBN/63.jpg', alt: 'Client Image 63' },
  { url: 'https://i.postimg.cc/cHYfP4jY/40.jpg', alt: 'Client Image 40' },
  { url: 'https://i.postimg.cc/bwC0t5k3/39.jpg', alt: 'Client Image 39' },
  { url: 'https://i.postimg.cc/VL4nxhGL/41.jpg', alt: 'Client Image 41' },
  { url: 'https://i.postimg.cc/bJQ23VDM/43.jpg', alt: 'Client Image 43' },
  { url: 'https://i.postimg.cc/BZBKFyGM/44.jpg', alt: 'Client Image 44' },
  { url: 'https://i.postimg.cc/P5PpB5vD/42.jpg', alt: 'Client Image 42' },
  { url: 'https://i.postimg.cc/GtL9zL1P/45.jpg', alt: 'Client Image 45' },
  { url: 'https://i.postimg.cc/5t80VY43/46.jpg', alt: 'Client Image 46' },
  { url: 'https://i.postimg.cc/sxHfc5md/47.jpg', alt: 'Client Image 47' },
  { url: 'https://i.postimg.cc/DZB7v1tb/48.jpg', alt: 'Client Image 48' },
  { url: 'https://i.postimg.cc/gctG1qyd/49.jpg', alt: 'Client Image 49' },
  { url: 'https://i.postimg.cc/JhQLxb7N/50.jpg', alt: 'Client Image 50' },
  { url: 'https://i.postimg.cc/zGCZDnhN/52.jpg', alt: 'Client Image 52' },
  { url: 'https://i.postimg.cc/Rh25hdG5/51.jpg', alt: 'Client Image 51' },
  { url: 'https://i.postimg.cc/wx1BqGTS/53.jpg', alt: 'Client Image 53' },
  { url: 'https://i.postimg.cc/4NzsnkCM/54.jpg', alt: 'Client Image 54' },
  { url: 'https://i.postimg.cc/kgTrt7j9/56.jpg', alt: 'Client Image 56' },
  { url: 'https://i.postimg.cc/PqFk0dZ4/55.jpg', alt: 'Client Image 55' },
  { url: 'https://i.postimg.cc/zGtMG0Bv/57.jpg', alt: 'Client Image 57' },
  { url: 'https://i.postimg.cc/L53QKV7x/58.jpg', alt: 'Client Image 58' },
  { url: 'https://i.postimg.cc/63NhWvdQ/60.jpg', alt: 'Client Image 60' },
  { url: 'https://i.postimg.cc/BQ59pJ7Y/61.jpg', alt: 'Client Image 61' },
  { url: 'https://i.postimg.cc/D0n5gXZd/59.jpg', alt: 'Client Image 59' },
];

const Clients = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? imageList : imageList.slice(0, 21);

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="clients-gallery">
      <h2 className="gallery-title">Our Clients</h2>

      <motion.div className="gallery-grid">
        <AnimatePresence>
          {displayedImages.map((img) => (
            <motion.img
              key={img.url}
              src={img.url}
              alt={img.alt}
              className="gallery-img"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(img.url)}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {imageList.length > 21 && (
        <motion.button
          className="show-more-btn"
          onClick={toggleShowAll}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? 'Show Less' : 'Show More'}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.button>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className="close-btn" onClick={closeModal}>
                <X size={24} />
              </button>
              <img src={selectedImage} alt="Selected" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Clients;