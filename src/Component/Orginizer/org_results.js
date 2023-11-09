import Sidebar from './Components/sidebar';
import React, { useState } from 'react';
import { Button, Box, Card, CardContent, Select, MenuItem } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormControl from '@mui/material/FormControl';    
import InputLabel from '@mui/material/InputLabel';

const FinalResultsPage = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [rank, setRank] = useState('');
    const [participant, setParticipant] = useState('');
    const [results, setResults] = useState([
        { rank: '1', participant: 'Participant 1' },
        { rank: '2', participant: 'Participant 2' },
        // Add more sample data as needed
    ]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [filterRank, setFilterRank] = useState('');
    const [sortOrder, setSortOrder] = useState('highToLow');

    const openAddDialog = () => {
        setOpenDialog(true);
    };

    const closeAddDialog = () => {
        setOpenDialog(false);
        setRank('');
        setParticipant('');
    };

    const addResult = () => {
        if (rank && participant) {
            setResults([...results, { rank, participant }]);
            closeAddDialog();
        }
    };

    const openRemoveDialog = (index) => {
        setEditingIndex(index);
        setOpenDialog(true);
    };

    const removeResult = () => {
        if (editingIndex !== null) {
            const updatedResults = results.filter((_, index) => index !== editingIndex);
            setResults(updatedResults);
            closeAddDialog();
            setEditingIndex(null);
        }
    };

    const cancelEdit = () => {
        setEditingIndex(null);
        closeAddDialog();
    };

    const filterResults = () => {
        const sortedResults = [...results];
        if (sortOrder === 'highToLow') {
            sortedResults.sort((a, b) => parseInt(b.rank) - parseInt(a.rank));
        } else {
            sortedResults.sort((a, b) => parseInt(a.rank) - parseInt(b.rank));
        }
        return sortedResults.filter((result) => result.rank.includes(filterRank));
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px',
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            Final Results
                        </Typography>
                        <Button variant="contained" color="primary" onClick={openAddDialog}>
                            Add
                        </Button>
                    </Box>
                    <Box sx={{  display: 'flex' }}>
                        <TextField
                            label="Filter by Rank"
                            margin="normal"
                            value={filterRank}
                            onChange={(e) => setFilterRank(e.target.value)}
                        />
                        <FormControl>
                            <InputLabel id="sort-order-label">Sort Order</InputLabel>
                            <Select
                                labelId="sort-order-label"
                                value={sortOrder}
                                sx={{
                                    marginLeft: '16px',
                                    marginTop: '16px',
                                    display: 'inline-block',
                                }}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <MenuItem value="highToLow">High to Low</MenuItem>
                                <MenuItem value="lowToHigh">Low to High</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>

                    <Dialog open={openDialog} onClose={cancelEdit}>
                        <DialogTitle>{editingIndex !== null ? 'Remove Result' : 'Add Participant Result'}</DialogTitle>
                        <DialogContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                padding: '16px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {editingIndex !== null ? (
                                <Typography variant="body1" gutterBottom>
                                    Are you sure you want to remove this result?
                                </Typography>
                            ) : (
                                <>
                                    <TextField
                                        label="Rank"
                                        fullWidth
                                        margin="normal"
                                        value={rank}
                                        onChange={(e) => setRank(e.target.value)}
                                    />
                                    <Select
                                        label="Participant"
                                        fullWidth
                                        value={participant}
                                        onChange={(e) => setParticipant(e.target.value)}
                                    >
                                        <MenuItem value="Participant 1">Participant 1</MenuItem>
                                        <MenuItem value="Participant 2">Participant 2</MenuItem>
                                        <MenuItem value="Participant 3">Participant 3</MenuItem>
                                        <MenuItem value="Participant 4">Participant 4</MenuItem>
                                        <MenuItem value="Participant 5">Participant 5</MenuItem>
                                    </Select>
                                </>
                            )}
                        </DialogContent>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                padding: '16px',
                            }}
                        >
                            <Button onClick={cancelEdit}>Cancel</Button>
                            <Button onClick={editingIndex !== null ? removeResult : addResult} color="primary">
                                {editingIndex !== null ? 'Remove' : 'Add'}
                            </Button>
                        </div>
                    </Dialog>

                    <Typography variant="h6" gutterBottom sx={{ padding: '16px' }}>
                        Results List
                    </Typography>
                    <Box sx={{ padding: '16px' }}>
                        <TableContainer component={Card}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Rank</TableCell>
                                        <TableCell>Participant</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filterResults().map((result, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{result.rank}</TableCell>
                                            <TableCell>{result.participant}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" color="primary" onClick={() => openRemoveDialog(index)}>
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                        <Button variant="contained" color="primary" onClick={openAddDialog}>
                            Publish Result
                        </Button>
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default FinalResultsPage;
