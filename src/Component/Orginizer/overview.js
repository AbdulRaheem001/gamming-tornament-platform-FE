import React, { useEffect, useState } from "react";
import Sidebar from "./Components/sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../Commen/Footer";
import Navbar from "../Commen/Navbar";
import { Card, CardContent, Grid, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const Overview=() =>{
  const tornamentId = sessionStorage.getItem("tornamentId");
  const [ tornamentData, setTornamentData ] = useState({});
  const [dateTime, setDateTime]=useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:8000/tornament/getTournamentById/${tornamentId}`)
      .then((res) => {
        setTornamentData(res.data);
        setDateTime (new Date(res.data.started));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  },[]);
  
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "64px" }}>
        <Box p={2}>
          {/* 1st Row */}
          <Box mb={2}>
            <Card>
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{ borderBottom: "1px solid #333", mb: "10px" }}
                >
                  {tornamentData.tournamentName}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Description
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {tornamentData.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* 2nd Row */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: "4px solid blue" }}>
                <CardContent>
                  <Typography variant="h6">Price</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${tornamentData.winningPrice}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: "4px solid blue" }}>
                <CardContent>
                  <Typography variant="h6">Fee</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${tornamentData.fee}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: "4px solid blue" }}>
                <CardContent>
                  <Typography variant="h6">Date & Timing</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {dateTime.toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: "4px solid blue" }}>
                <CardContent>
                  <Typography variant="h6">Status</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {tornamentData.status}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* 3rd Row */}
          <Box mb={2}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: "10px" }}>
                  Participants
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <div>
                    <Typography variant="h6" color="textSecondary">
                      Total Participants
                    </Typography>
                    <Typography variant="h3">{tornamentData.teamSize}</Typography>
                  </div>
                  <div>
                    <Typography variant="h6" color="textSecondary">
                      Registered Participants
                    </Typography>
                    <Typography variant="h3">{tornamentData.players ? tornamentData.players.length : 0}</Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* 4th Row */}
          <Box mb={2}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: "10px" }}>
                  Winner
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Sample Name
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Publish Button */}
          <Box mt={2}>
            <Button
              variant="outlined"
              color="primary"
              size="Large"
              sx={{ marginLeft: "90%" }}
            >
              Publish
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Overview;
