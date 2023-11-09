import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button,Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the icon you want to use for the user avatar
import GamesIcon from '@mui/icons-material/Games'; // Import the icon for the Games tab
import CoinIcon from '@mui/icons-material/MonetizationOn'; // Import the icon for the Coin Shop tab
import HomeIcon from '@mui/icons-material/Home'; // Import the icon for the Home tab
const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        boxShadow: 'none',
        borderBottom: '1px solid #45f884',
        padding: '10px 80px',
        height: '100px',
        position: 'sticky',
      }}
    >
      <Toolbar>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 6, color: '#45f884', fontFamily: 'cursive' }}
        >
          T<span style={{ color: '#fff' }}>our</span>nafest
        </Typography>

        <Link to='/'>
          <Button
            color="inherit"
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884',
              },
            }}
          >
            <HomeIcon sx={{ marginRight: 1 }} /> {/* Add Home icon */}
            Home
          </Button>
        </Link>
        <Link to='/gamelist'> {/* Link to the "gamelist" page */}
          <Button
            color="inherit"
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884',
              },
            }}
          >
            <GamesIcon sx={{ marginRight: 1 }} /> {/* Add Games icon */}
            Games
          </Button>
        </Link>
        <Link to='/coinshop'>
          <Button
            color="inherit"
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: '300',
              '&:hover': {
                color: '#45f884',
              },
            }}
          >
            <CoinIcon sx={{ marginRight: 1 }} /> {/* Add Coin Shop icon */}
            Coin Shop
          </Button>
        </Link>
        <Button
          color="inherit"
          variant="outlined"
          component={Link} // Use the Link component to navigate to the "Mainlogin.js" route
          to='/Mainlogin' // Set the path to Mainlogin.js
          sx={{
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '300',
            '&:hover': {
              color: '#45f884',
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
