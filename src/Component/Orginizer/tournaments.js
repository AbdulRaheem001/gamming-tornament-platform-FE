import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Sidebar from "./Components/sidebar";
import axios from "axios";
import { getUserId } from "./Components/userID";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const TournamentList = () => {
  const [tournaments, setTournaments] = useState([]);
const navigate= useNavigate();
  useEffect(() => {
    // Fetch the user's ID here, you can use the 'getUserId' function
    const userId = sessionStorage.getItem("id");

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

  const tornamentView = (id)=>{
    sessionStorage.setItem("tornamentId", id);
    navigate(`/overview`);
  }
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
                    <Button onClick={()=>tornamentView(tournament._id)}>View</Button>
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
