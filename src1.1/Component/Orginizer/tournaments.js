import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Sidebar from "./Components/sidebar";
import axios from "axios";
import { getUserId } from "./Components/userID";

const TournamentList = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    // Fetch the user's ID here, you can use the 'getUserId' function
    const userId = getUserId(); // Replace this with your actual way of getting the user's ID.

    // Fetch the tournaments for the specific organizer
    axios
      .get(`http://localhost:8000/tornament/tournaments/${userId}`)
      .then((response) => {
        setTournaments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tournaments:", error);
      });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "64px" }}>
          <div style={{ padding: "1rem" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "1rem",
              }}
            >
              <Typography variant="h4">My Tournaments</Typography>
            </Box>
            <Grid container spacing={2}>
              {tournaments.map((tournament) => (
                <Grid item key={tournament._id} xs={12} sm={6} md={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6">
                        Tournament Name: {tournament.tournamentName}
                      </Typography>
                      <Typography variant="body2">
                        Team Size: {tournament.teamSize}
                      </Typography>
                      <Typography variant="body2">
                        Fee: ${tournament.fee}
                      </Typography>
                      <Typography variant="body2">
                        Winning Price: ${tournament.winningPrice}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TournamentList;
