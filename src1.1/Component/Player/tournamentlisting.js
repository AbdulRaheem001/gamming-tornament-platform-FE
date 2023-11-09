import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  Tab,
  Tabs,
} from '@mui/material';

import Navbar from '../Commen/Navbar'; // Assuming you have a Navbar component
import Footer from '../Commen/Footer'; // Assuming you have a Footer component
import Autocomplete from '@mui/material/Autocomplete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';
import { getUserId } from "./userID";

const TournamentList = () => {
  const [platform, setPlatform] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('None');
  const [tabValue, setTabValue] = useState('Open');
  const [openDialog, setOpenDialog] = useState(false);
  const [apiTournaments, setApiTournaments] = useState([]); // Use a state variable for API data

  useEffect(() => {
    // Fetch data from the API and update the state
    const userId = getUserId();

    axios
      .get(`http://localhost:8000/tornament/`)
      .then((response) => {
        const updatedTournaments = response.data.map(async (tournament) => {
          const gameResponse = await axios.get(
            `http://localhost:8000/game/${tournament.gameID}`
          );
          return {
            ...tournament,
            gameName: gameResponse.data.name,
          };
        });
        Promise.all(updatedTournaments).then((tournamentsWithGameNames) => {
          setApiTournaments(tournamentsWithGameNames);
        });
      })
      .catch((error) => {
        console.error("Error fetching tournaments:", error);
      });
  }, []);

  // Function to sort tournaments based on the selected sorting criteria
  const sortTournaments = (tournaments, sortBy) => {
    const sortedTournaments = [...tournaments];
    switch (sortBy) {
      // Add sorting logic here
    }
    return sortedTournaments;
  };

  useEffect(() => {
    // Filter and sort the tournaments based on state variables
    let filtered = apiTournaments.filter(
      (tournament) =>
        (platform === 'All' || tournament.platform === platform) &&
        (searchQuery ? tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) : true) &&
        (tabValue === 'All' || tournament.status === tabValue)
    );

    filtered = sortTournaments(filtered, sortBy);

    // Update the state with the filtered and sorted tournaments
    setApiTournaments(filtered);
  }, [platform, searchQuery, sortBy, tabValue]);
  const onClickRegister = async (tournamentId) => {
    try {
      console.log(tournamentId);
      const response = await axios.post(`http://localhost:8000/tornament/addPlayer`, {
        playerID: getUserId(),
        tournamentId: tournamentId,
      });
      if (response.status === 200) {
        alert("Successfully registered for the tournament!");
      } else {
        console.error("Error registering for the tournament:", response.data.error);
        alert("Failed to register for the tournament.");
      }
    } catch (error) {
      console.error("Error registering for the tournament:", error);
      alert("Failed to register for the tournament.");
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, bgcolor: 'white' }}>
        <Navbar />
        <Container sx={{ mt: 0, mb: 3 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Tournament List
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label="Search Tournament"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ mr: 2 }}
              />
              <Autocomplete
                id="platform-combo-box"
                options={['All', 'PC', 'Mobile', 'Playstation']}
                value={platform}
                sx={{ width: 200 }}
                onChange={(event, newValue) => {
                  setPlatform(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Platform" />}
              />
              <Autocomplete
                id="sort-combo-box"
                options={[
                  'None',
                  'Prize: High to Low',
                  'Prize: Low to High',
                  'Fee: High to Low',
                  'Fee: Low to High',
                ]}
                value={sortBy}
                sx={{ width: 250 }}
                onChange={(event, newValue) => {
                  setSortBy(newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Sort By" />}
              />
            </Box>
            <Tabs
              value={tabValue}
              onChange={(e, newValue) => setTabValue(newValue)}
            >
              <Tab label="Open" value="Open" />
              <Tab label="Closed" value="Closed" />
              <Tab label="All" value="All" />
            </Tabs>
          </Box>
          <Grid container spacing={2}>
            {apiTournaments.map((tournament) => (
              <Grid key={tournament.key} item xs={12}>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: '#45F88E',
                      }}
                    >
                      {/* {getAvatarInitial(tournament.organizerID)} */}
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{tournament.tournamentName}</Typography>
                      <Typography>
                        <span role="img" aria-label="Prize">🏆</span> Prize: {tournament.winningPrice}
                        &nbsp;|&nbsp;
                        <span role="img" aria-label="Fee">💰</span> Fee: {tournament.fee}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {tournament.participants} joined out of {tournament.totalParticipants}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Status: {tournament.status}
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => onClickRegister(tournament._id)}
                  >
                    Register
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />

      {/* Register Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Register Confirmation</DialogTitle>
        <DialogContent>
          {/* Add your registration form here */}
          <Typography>Are You Sure ? To Register This Tournament Room "Fee" will be Deduct from your Wallet.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button  color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TournamentList;
