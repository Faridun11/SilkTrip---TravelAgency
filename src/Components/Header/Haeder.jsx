import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss"

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Select,
  MenuItem,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Menu,
  LightMode,
  DarkMode,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");


  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Tours", to: "/tours" },
    { label: "Preview", to: "/preview" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <AppBar className="header" position="sticky" color="default" elevation={4}>
      <Toolbar
        component={motion.div}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1350px",
          width: "100%",
          mx: "auto", // markazlashtirish
          px: 2, // chap-o‘ng padding
        }}
      >
        {/* Chap tomoni: Logo va menyu linklari */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            className="logo"
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
            }}
          >
            <img style={{ width: "70px" }} src="/logo.png" alt="" />
          </Typography>

          {!isMobile &&
            navLinks.map((link) => (
              <Typography
                key={link.to}
                component={NavLink}
                to={link.to}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 500,
                  "&:hover": { color: "primary.main" },
                  cursor: "pointer",
                }}
              >
                {link.label}
              </Typography>
            ))}
        </Box>

        {/* O‘ng tomoni: til select, tema toggle, telefon raqamlar va mobil menyu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>


          {!isMobile && (
            <Box
              sx={{ display: "flex", flexDirection: "column", fontSize: 13 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone fontSize="small" />
                <a
                  href="tel:+998901775770"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +998 90 177 57 70
                </a>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <WhatsApp fontSize="small" color="success" />
                <a
                  href="https://wa.me/998901775770"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +998 90 177 57 70
                </a>
              </Box>
            </Box>
          )}

          {isMobile && (
            <IconButton
              onClick={toggleDrawer}
              color="inherit"
              aria-label="open menu"
            >
              <Menu />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      {/* Mobil menyu uchun Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem disablePadding key={link.to}>
                <ListItemButton component={NavLink} to={link.to}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                  py: 1,
                  gap: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" />
                  <a
                    href="tel:+998901775770"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    +998 90 177 57 70
                  </a>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <WhatsApp fontSize="small" color="success" />
                  <a
                    href="https://wa.me/998901775770"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    +998 90 177 57 70
                  </a>
                </Box>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;