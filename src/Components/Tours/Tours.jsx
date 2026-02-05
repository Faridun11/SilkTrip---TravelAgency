import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tours from "../../data/tours.json";
import { Clock } from "lucide-react";
import "./Tours.scss";
import { Helmet } from "react-helmet";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Tours = () => {
  return (
    <div className="tours">
      <Helmet>
        <title>
          GuideAziz | Uzbekistan Tour Guide & Silk Road Travel
        </title>
        <meta
          name="description"
          content="Explore Samarkand, Bukhara, Tashkent & Khiva with local guides. Add mountain trips, cooking classes, walking tours and Tajikistan’s 7 Lakes — from just $100."
        />
        <meta
          name="keywords"
          content="GuideAziz tour, 7 Lakes from Samarkand, Iskanderkul lake, Uzbekistan guided tours, Bukhara sightseeing, Samarkand walking tour, Amirsoy ski resort"
        />
      </Helmet>

      <h1 className="tours__title">Ultimate Travel Experience</h1>
      <div className="tours__grid">
        {tours.map((tour) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={tour.id}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link to={`/tours/${tour.id}`}>
                <Card className="tours__card">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="tours__image"
                  />
                  <CardContent className="tours__content">
                    <h2 className="tours__card-title">{tour.title}</h2>
                    <hr className="tours__divider" />
                    <div className="tours__pricing-block">
                      <div>
                        <p className="tours__from">Starts from:</p>
                        <p className="tours__price">${tour.price}</p>
                        <p className="tours__taxes">TAXES/INCL/PERS</p>
                      </div>
                      <div className="tours__duration">
                        <Clock className="tours__icon" />
                        {tour.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
