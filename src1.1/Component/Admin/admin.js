import React from 'react';
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
                    3
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
                    0
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
                    2000
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
                {rows.map((row) => (
                  <TableRow key={row.index}>
                    <TableCell>{row.index}</TableCell>
                    <TableCell>{row.tournamentName}</TableCell>
                    <TableCell>{row.createdDate}</TableCell>
                    <TableCell>{row.gameName}</TableCell>
                    <TableCell>{row.status}</TableCell>
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
