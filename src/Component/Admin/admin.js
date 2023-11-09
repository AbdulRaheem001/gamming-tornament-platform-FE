import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Sidebar from './components/adminsidebar';
import Title from './components/admintitle';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

function createData(index, tournamentName, createdDate, gameName, status) {
  return { index, tournamentName, createdDate, gameName, status };
}

//const tournamentStatus = ['Results Pending', 'Draft', 'Close'];

const rows = [
  createData(1, 'Tournament A', '2023-11-01', 'Game X', 'Organizer A'),
  createData(2, 'Tournament B', '2023-11-02', 'Game Y', 'Organizer B'),
  createData(3, 'Tournament C', '2023-11-03', 'Game Z', 'Organizer C'),
];

function Admin() {
  const [playerCount,setPlayerCount]= useState();
  const [organizerCount,setOrganizerCount]= useState(); 
  const [gameCount,setGameCount]= useState(); 
  const [apiTournaments, setApiTournaments] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/userCount`)
      .then((response) => {
        console.log(response.data);
        setPlayerCount(response.data.playerCount);
        setOrganizerCount(response.data.organizerCount);
        setGameCount(response.data.gameCount);
      })
      .catch((error) => {
        console.error("Error fetching counts:", error);
      });

      axios
      .get(`http://localhost:8000/tornament/`)
      .then((response) => {
        const updatedTournaments = response.data.map(async (tournament) => {
          const gameResponse = await axios.get(
            `http://localhost:8000/game/${tournament.gameID}`
          );
          const organizerResponse = await axios.get(
            `http://localhost:8000/user/organizerName/${tournament.organizerID}`
          );
          const date = new Date(tournament.started);
          const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
          
          // Format the date
          const formattedDate = date.toLocaleDateString('en-US', options);
          console.log("date", formattedDate);
          return {
            ...tournament,
            gameName: gameResponse.data.name,
            organizerName: organizerResponse.data.name,
            createdAt:formattedDate,
          };
        });
        Promise.all(updatedTournaments).then((tournamentsWithGameNames) => {
          setApiTournaments(tournamentsWithGameNames);
        });
        console.log('Tornament Data', apiTournaments)
      })
      .catch((error) => {
        console.error("Error fetching tournaments:", error);
      });
    }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {/* 1st Card - Total Tournaments */}
            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Title>Total Player</Title>
                  <Typography component="p" variant="h4" marginBottom={2}>
                    {playerCount}
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      View Players
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            {/* 2nd Card - Running Tournament */}
            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Title>Total Organizer</Title>
                  <Typography component="p" variant="h4" marginBottom={2}>
                    {organizerCount}
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      View Organizer
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            {/* 3rd Card - Wallet Amount */}
            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent>
                  <Title>Total Games</Title>
                  <Typography component="p" variant="h4" marginBottom={2}>
                    {gameCount}
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      Check Games
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Tournament Summary */}
          <Typography variant="h5" sx={{ marginTop: '24px' }}>
            <Title>Tournament Summary</Title>
          </Typography>

          {/* Data Table for Tournament Summary */}
          <TableContainer sx={{ marginTop: '16px' }}>
            <Table>
              <TableHead sx={{ backgroundColor: 'grey', fontWeight: 'bold', color: 'white' }}>
                <TableRow>
                  <TableCell>Index</TableCell>
                  <TableCell>Tournament Name</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Game Name</TableCell>
                  <TableCell>Organizer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {apiTournaments.map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell>{index +1}</TableCell>
                    <TableCell>{row.tournamentName}</TableCell>
                    <TableCell>{row.createdAt}</TableCell>
                    <TableCell>{row.gameName}</TableCell>
                    <TableCell>{row.organizerName}</TableCell>
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

export default Admin;
