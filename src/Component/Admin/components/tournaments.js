import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
const StyledCard = styled(Card)({
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
});

const createData = (name, game, status, organizer) => {
    return { name, game, status, organizer };
};

const rows = [
    createData('Frozen yoghurt etc', 'Pc/Ps 4', 'Open', 'Organizer 1'),
    createData('Ice cream sandwich', 'Pc/Ps 4', 'Close', 'Organizer 2'),
    createData('Eclair cream sandw', 'Pc/Ps 4', 'Freez', 'Organizer 3'),
    createData('Frozen yoghurt etc', 'Pc/Ps 4', 'Open', 'Organizer 4'),
    createData('Frozen yoghurt etc', 'Pc/Ps 4', 'Close', 'Organizer 5'),
];

const Tabletournament = () => {
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editedPlayer, setEditedPlayer] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [apiTournaments, setApiTournaments] = useState([])
    useEffect(() => {   
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

              return {
                ...tournament,
                gameName: gameResponse.data.name,
                organizerName: organizerResponse.data.name,
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
    const handleEditClick = (player) => {
        setEditedPlayer(player);
        setEditDialogOpen(true);
    };

    const handleCloseEditDialog = () => {
        setEditedPlayer(null);
        setEditDialogOpen(false);
    };

    const handleToggleFreez = (player) => {
        if (player.status === 'Freez') {
            player.status = 'Open';
        } else {
            player.status = 'Freez';
        }
        setEditedPlayer(player);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterStatus = (event) => {
        setFilterStatus(event.target.value);
    };

    const filteredRows = apiTournaments.filter(row =>
        row.tournamentName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterStatus === '' || row.status === filterStatus)
    );

    return (
        <Box sx={{
            backgroundColor: 'transparent',
        }}>
            <Box sx={{ marginBottom: '1rem' }}>
                <TextField
                    label="Search"
                    
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="Status" style={{ background: '#fff', paddingLeft: '1px' }}>
                        Status
                    </InputLabel>
                    <Select
                        value={filterStatus}
                        onChange={handleFilterStatus}
                        label="Status"
                        sx={{ width: '150px' }}
                        inputProps={{
                            name: 'status',
                            id: 'Status',
                        }}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Open">Open</MenuItem>
                        <MenuItem value="Close">Close</MenuItem>
                        <MenuItem value="Freez">Freez</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Game</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Organizer Name</TableCell>
                        <TableCell align='center'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredRows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.tournamentName}</TableCell>
                            <TableCell>{row.gameName}</TableCell>
                            <TableCell>
                                <Chip
                                    label={row.status}
                                    color={row.status === 'Open' ? 'success' : row.status === 'Freez' ? 'default' : 'error'}
                                />
                            </TableCell>
                            <TableCell>{row.organizerName}</TableCell>
                            <TableCell sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                            }}>
                                <Button variant='contained' onClick={() => handleEditClick(row)}>View</Button>
                                <Button variant='contained' sx={{
                                    bgcolor: row.status === 'Freez' ? '#DC4C64' : '#4CAF50',
                                }} onClick={() => handleToggleFreez(row)}>
                                    {row.status === 'Freez' ? 'Unfreez' : 'Freez'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog fullWidth open={editDialogOpen} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Player Details</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField
                        label="Name"
                        fullWidth
                        value={editedPlayer ? editedPlayer.name : ''}
                        onChange={(e) => setEditedPlayer({ ...editedPlayer, name: e.target.value })}
                    />
                    <TextField
                        label="Game"
                        fullWidth
                        value={editedPlayer ? editedPlayer.game : ''}
                        onChange={(e) => setEditedPlayer({ ...editedPlayer, game: e.target.value })}
                    />
                    <TextField
                        label="Organizer Name"
                        fullWidth
                        value={editedPlayer ? editedPlayer.organizer : ''}
                        onChange={(e) => setEditedPlayer({ ...editedPlayer, organizer: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Tabletournament;









