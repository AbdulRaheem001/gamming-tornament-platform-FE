import { useState } from 'react';
import Sidebar from './Components/sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid, Card, CardContent } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ParticipantPage = () => {
    const [participants, setParticipants] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Bob Smith' },
    ]);

    const removeParticipant = (id) => {
        setParticipants(participants.filter(participant => participant.id !== id));
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '100px' }}>
                    <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: '20px' }}>
                        <Grid item xs={6} >
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">Total : {participants.length}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">Registered : {participants.length}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: '16px' }}>Close Registration</Button>
                    <TableContainer component={Paper} sx={{ margin: '50px', width: '80%', justifyContent: "space-between" }}>
                        <Table sx={{ justifyContent: "space-between" }}>
                            <TableHead sx={{ backgroundColor: '#ccc' }}>
                                <TableRow>
                                    <TableCell>Index</TableCell>
                                    <TableCell>Participant Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {participants.map((participant, index) => (
                                    <TableRow key={participant.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{participant.name}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => removeParticipant(participant.id)}>
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
