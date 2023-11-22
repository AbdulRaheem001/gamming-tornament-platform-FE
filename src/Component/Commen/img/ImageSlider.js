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
      padding: '10% 0',
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
        // sx={{ width: 800, height: 400 }}
        image={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </Box>
  );
};

export default ImageSlider;

// import React, { useState, useEffect } from 'react';
// import Box from '@mui/system/Box';
// import CardMedia from '@mui/material/CardMedia';
// import { makeStyles } from '@mui/system/styles';

// const images = [
//   'https://wallpapercave.com/wp/wp4870446.jpg',
//   'https://w0.peakpx.com/wallpaper/217/168/HD-wallpaper-call-of-duty-warzone-2.jpg',
//   'https://w0.peakpx.com/wallpaper/932/660/HD-wallpaper-call-of-duty-warzone-call-of-duty-warzone-rebirth-island.jpg',
//   'https://images7.alphacoders.com/854/854917.jpg',
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: 'relative',
//     height: '70vh',
//     overflow: 'hidden',
//   },
//   imageContainer: {
//     position: 'absolute',
//     top: 0,
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardMedia: {
//     width: '70%',
//     borderRadius: theme.shape.borderRadius,
//     boxShadow: theme.shadows[5],
//     transition: 'opacity 0.3s ease-in-out',
//     opacity: 1,
//   },
//   dimmed: {
//     opacity: 0.3,
//   },
// }));

// const ImageSlider = () => {
//   const classes = useStyles();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Box className={classes.root}>
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`${classes.imageContainer} ${
//             index === currentImageIndex ? '' : classes.dimmed
//           }`}
//         >
//           <CardMedia
//             component="img"
//             className={classes.cardMedia}
//             image={image}
//             alt={`Image ${index + 1}`}
//           />
//         </div>
//       ))}
//     </Box>
//   );
// };

// export default ImageSlider;
