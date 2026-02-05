import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import {
  Instagram,
  Facebook,
  YouTube,
  Telegram,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #465c881b, #a1c2bd65)",
        py: 5,
        px: 3,
        mt: 5,
        borderTop: "1px solid #ccc",
      }}
    >
      {/* Main Content */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {/* Logo & Description */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            GuideAziz
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 300, color: "#333" }}>
            the Silk Trip's historical wonders with us. Professional guides, cultural adventures, and lifetime memories await.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Stack spacing={0.7}>
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Tours", path: "/tours" },
              { label: "Preview", path: "/preview" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <MuiLink
                key={link.label}
                component={RouterLink}
                to={link.path}
                underline="hover"
                sx={{
                  color: "#444",
                  fontSize: 14,
                  transition: "0.2s",
                  "&:hover": { color: "#4666a4", pl: 1 },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
        </Box>

        {/* Contact Info */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Contact
          </Typography>
          <MuiLink
            href="tel:+998901775770"
            underline="hover"
            sx={{ display: "block", color: "#444", fontSize: 14 }}
          >
            📞 +998 90 177 57 70
          </MuiLink>
          <MuiLink
            href="https://wa.me/998901775770"
            target="_blank"
            underline="hover"
            sx={{ display: "block", color: "#444", fontSize: 14 }}
          >
            💬 WhatsApp: +998 90 177 57 70
          </MuiLink>
          <MuiLink
            href="mailto:aziztheuzbeki@gmail.com"
            underline="hover"
            sx={{ display: "block", color: "#444", fontSize: 14 }}
          >
            ✉️ Aziztheuzbeki@gmail.com
          </MuiLink>
          <MuiLink
            href="https://www.instagram.com/azizguideuz/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ display: "flex", alignItems: "center", color: "#444", fontSize: 14, mt: 1 }}
          >
            <Instagram sx={{ mr: 1, fontSize: 18, color: "#E1306C" }} />
            Guide Azizbek
          </MuiLink>
          <MuiLink
            href="https://t.me/oasis2025"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ display: "flex", alignItems: "center", color: "#444", fontSize: 14, mt: 0.5 }}
          >
            <Telegram sx={{ mr: 1, fontSize: 18, color: "#0088cc" }} />
            Guide Azizbek
          </MuiLink>
        </Box>
      </Stack>

      {/* Social Icons */}
      {/* <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <IconButton
          component="a"
          // href="/"
          // target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#E1306C", "&:hover": { transform: "scale(1.1)" } }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          // href="/"
          // target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#1877F2", "&:hover": { transform: "scale(1.1)" } }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component="a"
          // href="/"
          // target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#FF0000", "&:hover": { transform: "scale(1.1)" } }}
        >
          <YouTube />
        </IconButton>
        <IconButton
          component="a"
          // href=""
          // target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#0088cc", "&:hover": { transform: "scale(1.1)" } }}
        >
          <Telegram />
        </IconButton>
      </Stack> */}

      {/* Footer Bottom */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: "#666" }}>
        © {new Date().getFullYear()} GuideAziz | Developed by{" "}
        <a
          style={{ color: "#4666a4" }}
          target="_blank"
          href="https://t.me/Web_Faridun"
          rel="noopener noreferrer"
        >
          FaridunDev
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
