import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const cardData = [
  {
    imageUrl: 'https://themedox.com/demo/mykd/assets/img/team/team04.png',
    name: 'Player 1',
    role: 'Pubg Player',
  },
  {
    imageUrl: 'https://themedox.com/demo/mykd/assets/img/team/team02.png',
    name: 'Player 2',
    role: 'Fortnite Player',
  },{
    imageUrl: 'https://themedox.com/demo/mykd/assets/img/team/team01.png',
    name: 'Player 2',
    role: 'Fortnite Player',
  },{
    imageUrl: 'https://themedox.com/demo/mykd/assets/img/team/team03.png',
    name: 'Player 2',
    role: 'Fortnite Player',
  },
  // Add more card data as needed
];

export default function ImgMediaCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#000',
        margin: '0',
      }}
    >
      {cardData.map((data, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#000',
            margin: '40px auto',
            border: '.1px solid #333',
            padding: '10px',
            borderRadius: '20px',
          }}
        >
          <img src={data.imageUrl} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography component="div" variant="h5" sx={{ color: '#45f884' }}>
            {data.name}
          </Typography>
          <Typography component="div" variant="h5" sx={{ color: '#fff' }}>
            {data.role}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
