import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import tours from "../../data/tours.json";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Kirish animatsiyasi
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Tab content animatsiyasi
const tabContentVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const SingleTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tours.find((t) => t.id === id);
  const [tab, setTab] = useState(0);

  if (!tour) return <Typography variant="h5">Tour not found</Typography>;

  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="visible">
      <Box sx={{ maxWidth: 1200, mx: "auto", p: 2 }}>
        {/* Back Button */}
        <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate(-1)}>
          ← Back
        </Button>

        <Typography variant="h5" fontWeight={600} mb={2}>
          {tour.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Chap tomon (rasm + tabs) */}
          <Box sx={{ flex: 2 }}>
            <motion.img
              src={tour.image}
              alt={tour.title}
              style={{ width: "100%", borderRadius: 8 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <Tabs
              value={tab}
              onChange={(_, newVal) => setTab(newVal)}
              sx={{ mt: 2 }}
            >
              <Tab label="OVERVIEW" />
              <Tab label="ITINERARY" />
              <Tab label="INCLUDED" />
            </Tabs>

            <Box mt={2}>
              <AnimatePresence>
                {tab === 0 && (
                  <motion.div
                    key="overview"
                    variants={tabContentVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Typography sx={{ whiteSpace: "pre-line" }}>
                      {tour.overview}
                    </Typography>
                  </motion.div>
                )}

                {tab === 1 && (
                  <motion.div
                    key="itinerary"
                    variants={tabContentVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {tour.itinerary.map((day, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        style={{ marginBottom: 16 }}
                      >
                        <Typography fontWeight={600} color="primary">
                          {day.day}: {day.title}
                        </Typography>
                        <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                          {day.activities?.map((act, idx) => (
                            <li key={idx}>{act}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {tab === 2 && (
                  <motion.div
                    key="included"
                    variants={tabContentVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Typography fontWeight={600}>Included:</Typography>
                    <ul style={{ paddingLeft: 20 }}>
                      {tour.included?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <Typography fontWeight={600} mt={2}>
                      Not Included:
                    </Typography>
                    <ul style={{ paddingLeft: 20 }}>
                      {tour.notIncluded?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <Typography fontWeight={600} mt={2}>
                      Additional:
                    </Typography>
                    <ul style={{ paddingLeft: 20 }}>
                      {tour.additional?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Box>

          {/* O'ng tomon (Booking) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card sx={{ width: { xs: "100%", md: 280 }, height: "fit-content" }}>
              <CardContent>
                <Typography variant="h6" color="green">
                  ${tour.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Duration: {tour.duration}
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() =>
                    navigate("/contact", {
                      state: { tourTitle: tour.title },
                    })
                  }
                >
                  BOOK NOW
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SingleTour;
