import React from 'react';
import Typography from '@mui/material/Typography';
import Footer from './Footer';
import ImageSlider from './img/ImageSlider';
import OurPlayers from './img/OurPlayes';
import Header from './Header';
import Navbar from './Navbar';
const HomePage = () => {
  return (
    <>
    <Navbar/> 
    <Header/>
      <Typography variant="h3" component="h2" sx={{
        color: '#45f884',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000',
        mt: '10.5rem',
        paddingTop: '100px',
      }}>
        Our Gaming Gallery
      </Typography>
      
      <Typography variant="h5" component="h2" sx={{
        color: '#fff',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000'
      }}>
        Here is a chance to Play with us and Enjoy the gaming life!
      </Typography>
      <ImageSlider/>
      <Typography variant="h3" component="h2" sx={{
        color: '#45f884',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000',
       
      }}>
        Our Players
      </Typography>
      
      <Typography variant="h5" component="h2" sx={{
        color: '#fff',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000',
        paddingBottom: '100px',
      }}>
        Here is a chance to Play with Experiance and Enjoy the gaming life!
      </Typography>
      <OurPlayers/>
      <Footer/>
    </>
  );
};

export default HomePage;
