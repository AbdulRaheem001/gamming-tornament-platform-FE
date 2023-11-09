import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

const images = [
  'https://wallpapercave.com/wp/wp4870446.jpg',
  'https://w0.peakpx.com/wallpaper/217/168/HD-wallpaper-call-of-duty-warzone-2.jpg',
  'https://w0.peakpx.com/wallpaper/932/660/HD-wallpaper-call-of-duty-warzone-call-of-duty-warzone-rebirth-island.jpg',
  'https://images7.alphacoders.com/854/854917.jpg',
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index and loop back to the first image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <Box sx={{
      padding: '80px 0',
      height: '70vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#000',
      margin: '0',
    }}>
      <CardMedia
        component="img"
        sx={{ width: 800, height: 400 }}
        image={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </Box>
  );
};

export default ImageSlider;
