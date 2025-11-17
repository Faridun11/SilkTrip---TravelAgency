import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Contact.scss";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tourTitle = location.state?.tourTitle || "No tour selected";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendTelegram = async () => {
    const botToken = "8505212254:AAEnhtymN0NhOrSqJ0XWALxHO7_bjoxJGQA";
    const chatId = "-1003225060897";

    const text = `
🧳 *Tour Booking Request*
*Tour:* ${tourTitle}

👤 Name: ${form.name}
📱 Phone: ${form.phone}
📧 Email: ${form.email}
💬 Message: ${form.message}
    `;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    alert("Message sent!");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="all">
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={600} mb={2}>
              Contact & Booking
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mb={2}>
              Booking for: <strong>{tourTitle}</strong>
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Phone / WhatsApp"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              fullWidth
              onClick={sendTelegram}
              sx={{ mb: 2 }}
            >
              Send Booking Request
            </Button>

            {/* 🔙 BACK BUTTON */}
            <Button variant="outlined" fullWidth onClick={() => navigate(-1)}>
              Back
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;
