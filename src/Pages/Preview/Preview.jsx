import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import feedbacks from "../../data/feedback.json";
import "./Preview.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Preview = () => {
  const [expandedComments, setExpandedComments] = useState({});

  const toggleExpand = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box className="preview-section">
      <Typography variant="h4" className="title">
        What Our Clients Say
      </Typography>

      <div className="feedback-grid">
        {feedbacks.map((fb, i) => {
          const isExpanded = expandedComments[fb.id] || false;

          return (
            <motion.div
              key={fb.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="feedback-motion"
            >
              <Card className="feedback-card">
                <CardContent className="feedback-content">
                  <Box className="user-info">
                    <Avatar
                      src={fb.avatar}
                      alt={fb.name}
                      className="user-avatar"
                    />
                    <Box>
                      <Typography fontWeight={600}>{fb.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {fb.country}
                      </Typography>
                    </Box>
                  </Box>


                  <Rating value={fb.rating} readOnly size="small" />

                  <Typography
                    className={`comment ${isExpanded ? "expanded" : ""}`}
                    variant="body2"
                  >
                    {fb.comment}
                  </Typography>

                  {fb.comment.length > 20 && (
                    <Button
                      onClick={() => toggleExpand(fb.id)}
                      size="small"
                      sx={{ mt: 1, alignSelf: "flex-start", textTransform: "none" }}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Box>
  );
};

export default Preview;
