import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';
import mainImage from './img/mainImg.jpg';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '70vh', // Set the container to full-screen height
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#000',
        margin: '0',
        marginTop: '5%',
      }}
    >
      <Grid container spacing={0}>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            flexDirection: 'column',
            position: 'absolute',
            bgcolor: 'rgba(0,0,0,0.5)',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            margin: '14px',
            zIndex: 1, // Place text and button above the image
          }}
        >
          <Paper
            sx={{ padding: 3, bgcolor: 'transparent' }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                '&:hover': {
                  backgroundColor: '#45f884',
                  color: '#000',
                },
              }}
            >
              Live Gaming
            </Button>
            <Typography
              variant="h2"
              sx={{ color: '#45f884', fontFamily: 'Monospace' }}
            >
              Join Tounaments
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: '#fff', fontSize: 16 }}
            >
              We provide amazing gaming service to enhance your experience.
            </Typography>
          </Paper>
        </Grid>

        <Grid>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              height: '100vh', // Set the inner container to full-screen height
              width: '100%', // Set the width to 100%
              bgcolor: 'transparent',
            }}
          >
            <img
              src={mainImage}
              alt="Image"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
