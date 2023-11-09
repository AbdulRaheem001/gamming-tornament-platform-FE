import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Navbar from '../Commen/navbar2';
import Footer from '../Commen/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Game Card component


const GameCard = ({ gameName, imageUrl }) => (
  <Card
    style={{
      width: '100%',
      maxWidth: 345,
      backgroundColor: 'white',
      border: '1px solid green',
      borderRadius: '12px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      transition: '0.3s',
    }}
  >
    <img src={imageUrl} alt="Game" style={{ width: '350px', height: '200px', objectFit: 'cover' }} />

    <CardContent>
      <Typography variant="h6" color="textPrimary" component="div">
        {gameName}
      </Typography>
      <Link to="/tournamentlist"> {/* Wrap your button in a Link component */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16, backgroundColor: '#45f884', color: '#000' }}
        >
          Play Now
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const Games = () => {
  const [platform, setPlatform] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };
  const [gameData, setgameData] = useState([]);
  
  

  const toBase64 = (arr) => {
    return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/game/allGames")
      .then((response) => {
        setgameData(response.data);
        console.log('Line 67', response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const processedGame = gameData.map((game) => ({
    ...game,
    imageUrl: game.image
      ? `data:image/png;base64,${toBase64(game.image.data)}`
      : null,
  }));

  const mappedGames = Array.isArray(processedGame) ? processedGame : [];
  const filteredGames = mappedGames
    ? mappedGames.filter((item) => {
      return (
        (platform === 'All' || item.platform === platform) &&
        (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    })
    : [];
  const formattedGames = filteredGames
    ? filteredGames.map((item) => ({
      ...item,
      image: item.image ? item.image : null,
    }))
    : [];
  console.log(formattedGames);
  return (
    <>
      <Navbar />
      <Box style={{ flexGrow: 1, bgcolor: '#f5f5f5', marginTop: '30px', marginBottom: '30px' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          <TextField
            label="Search Games"
            variant="outlined"
            style={{ minWidth: '800px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FormControl variant="outlined" style={{ minWidth: '400px' }}>
            <InputLabel>Platform</InputLabel>
            <Select value={platform} onChange={handlePlatformChange} label="Platform">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="PC">PC</MenuItem>
              <MenuItem value="Mobile">Mobile</MenuItem>
              <MenuItem value="Play-Station">Play-Station</MenuItem>
              <MenuItem value="X-Box">X-Box</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            justifyContent: 'normal',
            alignItems: 'stretch',
            minHeight: '100vh',
            padding: '16px',
          }}
        >
          {formattedGames.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <GameCard gameName={item.name} imageUrl={item.imageUrl} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Games;
