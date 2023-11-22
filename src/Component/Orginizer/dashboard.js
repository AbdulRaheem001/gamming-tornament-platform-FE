import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { getUserId } from "./Components/userID";
import Sidebar from "./Components/sidebar";
import Title from "./Components/title";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function preventDefault(event) {
  event.preventDefault();
}

function Dashboard() {
  const userId = sessionStorage.getItem("id");
  sessionStorage.removeItem('tornamentId');

  console.log("User ID:", userId);

  const data = useSelector((state) => {
    return state.users;
  });
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    // Fetch the tournaments for the specific organizer
    // console.log("test qq", sessionStorage.getItem("id"))
    axios
      .get(`http://localhost:8000/tornament/tournaments/${userId}`)
      .then((response) => {
        // For each tournament, fetch and add the game name based on gameID
        console.log(tournaments);

        const updatedTournaments = response.data.map(async (tournament) => {
          const gameResponse = await axios.get(
            `http://localhost:8000/game/${tournament.gameID}`
          );
          console.log(gameResponse);
          return {
            ...tournament,
            gameName: gameResponse.data.name,
          };
        });
        const tournamentsWithStartTime = updatedTournaments.map(
          (tournament) => {
            const startTime = tournament.startTime;
            const formattedStartTime = new Date(startTime).toLocaleString();
            return {
              ...tournament,
              startTime: formattedStartTime,
            };
          }
        );

        setTournaments(tournamentsWithStartTime);

        // Once all game names are fetched, update the state
        Promise.all(updatedTournaments).then((tournamentsWithGameNames) => {
          setTournaments(tournamentsWithGameNames);
        });
      })
      .catch((error) => {
        console.error("Error fetching tournaments:", error);
      });
    console.log("Out B :: ", tournaments);
  }, []);
  const running = () => {
    let count = 0;
    tournaments.forEach((tournament) => {
      if (tournament.status === "Start") {
        count++;
      }
    });
    return count;
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "64px" }}>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {/* 1st Card - Total Tournaments */}
            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Title>Total Tournaments</Title>
                  <Typography component="p" variant="h4" marginBottom={2}>
                    {tournaments.length}
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      View Tournaments
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            {/* 2nd Card - Running Tournament */}
            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Title>Running Tournaments</Title>
                  <Typography component="p" variant="h4" marginBottom={2}>
                    {running()}
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      Check Tournaments
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            {/* 3rd Card - Wallet Amount */}
            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Title>Wallet Amount</Title>
                  <Typography component="p" variant="h4" marginBottom={2}>
                    2000
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      Check Wallet
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Tournament Summary */}
          <Typography variant="h5" sx={{ marginTop: "24px" }}>
            <Title>Tournament Summary</Title>
          </Typography>

          {/* Data Table for Tournament Summary */}
          <TableContainer sx={{ marginTop: "16px" }}>
            <Table>
              <TableHead
                sx={{
                  backgroundColor: "#45f884",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <TableRow
                  sx={{
                    color: "white",
                  }}
                >
                  <TableCell>Index</TableCell>
                  <TableCell>Tournament Name</TableCell>
                  <TableCell>Game Name</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tournaments.map((tournament, index) => (
                  <TableRow key={tournament._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{tournament.tournamentName}</TableCell>
                    <TableCell>{tournament.gameName}</TableCell>
                    <TableCell>{tournament.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
