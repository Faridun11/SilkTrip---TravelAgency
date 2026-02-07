import React from "react";
import { Box, Typography, Avatar, Container, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./About.scss";
import { Helmet } from "react-helmet";

const About = () => {
  const stats = [
    { label: "Years Experience", value: 5, duration: 6 },
    { label: "Happy Clients", value: 700, duration: 5 },
    { label: "Countries worked with", value: 20, duration: 4.2 },
  ];

  return (
    <Box className="about-section">
      <Helmet>
        <title>AAAbout Guide Aziz – Your Guide to Uzbekistan</title>
        <meta
          name="description"
          content="Guide Aziz offers authentic Uzbekistan travel experiences. Discover historic landmarks, nature escapes, and cross-border trips to Tajikistan’s 7 Lakes and Fann Mountains."
        />
      </Helmet>

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" className="about-title">
            AAAbout Our Agency
          </Typography>

          <Typography variant="body1" className="about-text">
            Hi there!
            I’m Azizbek Rakhimov, founder of{" "}
            <strong>
              {" "}
              <a
                target="_blank"
                href="https://www.instagram.com/azizguideuz/"
                style={{ textDecoration: "none", color: "#4666a4", cursor: "pointer" }}
              >
                @GuideAziz
              </a>{" "}
            </strong>{" "}
            travel agency. For the last five years, I’ve been organizing tailor-made tours all
            over Uzbekistan, creating personalized travel experiences that highlight the beauty and spirit
            of my country.Together with my experienced colleagues,
            we’ve been proudly crafting unforgettable journeys across Uzbekistan and Tajikistan.
            <br />
            <br />
            I studied in London and used to travel around Europe, and although my major was completely
            different, my love for travel inspired me to start my own company — Silk Trip.We’re passionate
            about providing warm, friendly hospitality and showing our guests the real heart of Uzbekistan
            and Tajikistan. We don’t just guide you through ancient cities — we take you into breathtaking mountains
            and help you experience authentic village life.
            <br />
            <br />
            Our slogan is <strong>“Quality over Profit”</strong> — our guests always come first.
            We think about you, care about you, and, honestly... we love you!
            <br />
            <br />
            Book your journey with us — and make it truly unforgettable!
          </Typography>

          <Box className="owner-info">
            <Avatar alt="Founder" src="/avatar.jpg" className="owner-avatar" />
            <Box>
              <Typography fontWeight={600}>Azizbek Rakhimov</Typography>
              <Typography variant="body2" color="text.secondary">
                Founder & Tour Guide
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" className="section-title">
            Our Mission
          </Typography>
          <Typography className="section-text">
            To provide meaningful, authentic, and unforgettable travel
            experiences by connecting our guests to real people, culture,
            nature, and warm hospitality across Central Asia.
          </Typography>
        </motion.div>

        {/* Values */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" className="section-title">
            Our Values
          </Typography>
          <ul className="section-list">
            <li>🧭 Authentic and immersive travel experiences</li>
            <li>🤝 Personal connection and care for every guest</li>
            <li>🏔️ Showcasing nature, history, and real village life</li>
            <li>❤️ “Quality over Profit” — guests always come first</li>
            <li>
              ❌ Free cancelling and no prepayment!{" "}
            </li>
            <li>
              ❌You can with any currency EUROS,DOLLARS,POUNDS or National
              currency
            </li>
          </ul>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={3} justifyContent="center">
            {stats.map((stat, i) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });

              return (
                <Grid item xs={12} sm={4} ref={ref} key={i}>
                  <Paper elevation={3} className="stat-box">
                    <Typography variant="h4">
                      {inView && (
                        <CountUp
                          end={stat.value}
                          duration={stat.duration}
                          suffix="+"
                        />
                      )}
                    </Typography>

                    <Typography variant="body2">{stat.label}</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
