import { useEffect, useState } from "react";
import Sidebar from "./Components/sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, Card, CardContent } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

const ParticipantPage = () => {
  const [playerDetails, setPlayerDetails] = useState([]);
  const [details, setDetails] = useState([]);
  const tournamentId = sessionStorage.getItem("tornamentId");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/tornament/getPlayerDetails/${tournamentId}`)
      .then((res) => {
        console.log(res.data.tournamentDetails);
        setPlayerDetails(res.data.tournamentDetails.players);
        setDetails(res.data.tournamentDetails);
      });
  }, []);

  const removeParticipant = (playerId) => {
    axios
      .post(`http://localhost:8000/tornament/removeParticipant`, {
        tournamentId,
        playerId: playerId,
      })

      .then((res) => {
        const updatedPlayerDetails = playerDetails.filter(
          (participant) => participant._id !== playerId
        );
        setPlayerDetails(updatedPlayerDetails);
        console.log(
          `Participant with ID ${playerId} removed successfully from tournament ${tournamentId}`
        );
      })
      .catch((error) => {
        console.error("Error removing participant:", error);
        // Handle error scenarios
      });
  };

  const closeTournament = () => {
    console.log("Tournament close", tournamentId);
    axios
      .post(`http://localhost:8000/tornament/close`, { tournamentId })
      .then((res) => {
        console.log(`Tournament with ID ${tournamentId} closed successfully`);
        // Handle success scenarios, if needed
      })
      .catch((error) => {
        console.error("Error closing tournament:", error);
        // Handle error scenarios
      });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "100px" }}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ marginBottom: "20px" }}
          >
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Total : {details.teamSize}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Registered :{" "}
                    {Array.isArray(details.players)
                      ? details.players.length
                      : 0}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginBottom: "16px" }}
            onClick={() => closeTournament()}
          >
            Close Registration
          </Button>
          <TableContainer
            component={Paper}
            sx={{
              margin: "50px",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <Table sx={{ justifyContent: "space-between" }}>
              <TableHead sx={{ backgroundColor: "#ccc" }}>
                <TableRow>
                  <TableCell>Index</TableCell>
                  <TableCell>Participant Name</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playerDetails.map((participant, index) => (
                  <TableRow key={participant._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {participant.firstName} {participant.lastName}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => removeParticipant(participant._id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default ParticipantPage;
