import React from 'react';
import { Card, CardContent, Button, Typography, Grid, Box } from '@mui/material';
import coinimg from './img/coins.png';
import Navbar from '../Commen/Navbar';
import Footer from '../Commen/Footer';

const CoinShop = () => {
  const coinPackages = [
    { id: 1, amount: 100, price: 5, image: coinimg },
    { id: 2, amount: 500, price: 25, image: coinimg },
    { id: 3, amount: 1000, price: 50, image: coinimg },
    { id: 4, amount: 2000, price: 100, image: coinimg },
    { id: 5, amount: 5000, price: 250, image: coinimg },
    { id: 6, amount: 10000, price: 500, image: coinimg },
  ];

  const handleBuy = (coinPackage) => {
    // Handle the buy action here
    console.log('Buy action for', coinPackage.amount, 'Coins');
  };

  return (
    <>
      <Navbar />
      <Box style={{ flexGrow: 1, backgroundColor: '#000', marginTop: '0px' }}>
        <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
          {coinPackages.map((coinPackage) => (
            <Grid key={coinPackage.id} item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card style={{ width: '70%', backgroundColor: '#000', border: '1px solid #333', margin: '10px auto' }}>
                <CardContent>
                  <Typography variant="h6" component="div" style={{ textAlign: 'center', color: '#45f884' }}>
                    {coinPackage.amount} Coins
                  </Typography>
                  <img src={coinPackage.image} alt={`Coins ${coinPackage.amount}`} style={{ maxWidth: '100%', marginTop: 16 }} />
                  <Typography variant="h6" component="div" style={{ textAlign: 'center', color: '#45f884' }}>
                    Price: ${coinPackage.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: 16, backgroundColor: '#45f884' }} // Set button color here
                    onClick={() => handleBuy(coinPackage)}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default CoinShop;
