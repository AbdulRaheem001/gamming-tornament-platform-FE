import React from "react";
import { BsDiscord } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Typography, Container, Grid, TextField, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#000", py: 5, color: '#fff' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
              T<span>our</span>nafest
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#fff' }}>
              Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor
              sitamet consecteturLorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod.
              Nulla ullam dolor sitamet consectetur
            </Typography>
            <Typography variant="h5" sx={{ color: '#fff' }}>
              <span>Active</span>With Us
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, display: "flex" }}>
              <li style={{ marginRight: "10px" }}>
                <Link href="./">
                  <FaTelegramPlane />
                </Link>
              </li>
              <li style={{ marginRight: "10px" }}>
                <Link href="./">
                  <BsDiscord />
                </Link>
              </li>
              <li style={{ marginRight: "10px" }}>
                <Link href="./">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="./">
                  <FaFacebookF />
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: '#fff' }}>
              Newsletter
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#fff' }}>
              Subscribe our newsletter to get our latest update & newsconsectetur
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: '#fff',
              }}
            >
              <TextField type="text" placeholder="Enter your Email" variant="outlined" sx={{
                flex: 1, bgcolor: '#1f2935', color: '#fff', borderRadius: '10px',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }} />
              <Button variant="contained"
                sx={{
                  bgcolor: "#FFBE18", color: '#fff', borderRadius: '10px',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  height: '56px',

                  '&:hover': {
                    backgroundColor: '#45f884',
                    color: '#000',
                  },
                }}
              >Send</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{
        mt: 3, mb: 2, width: '50%', alignItems: 'center',
        margin: '0 auto',
        bgcolor: '#45f884'
      }} />
      <Link to="/adminLogin">
      <Button sx={{
        mt: 3, mb: 2,
        margin: '0 auto',
        color: '#000', padding: '10',
        alignItems: 'center',
        '&:hover': {
          color: '#45f884',
        },
      }} >
        Admin
      </Button>
      </Link>
      <Typography align="center" sx={{
        mt: 3, mb: 2,
        margin: '0 auto',
        color: '#45f884', padding: '10'
      }} >
        COPYRIGHT © 2023 - ALL RIGHTS RESERVED BY <span>Tournafest</span>
      </Typography>
    </Box>
  );
};

export default Footer;
