import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledCard = styled(Card)({
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
});

const createData = (name, email, status, country) => {
    return { name, email, status, country };
};

const rows = [
    createData('Frozen yoghurt etc', 'abd@gmail.com', 'Ban', 'pakistan'),
    createData('Ice cream sandwich', 'abd@gmail.com', 'Unban', 'pakistan'),
    createData('Eclair cream sandw', 'abd@gmail.com', 'Ban', 'pakistan'),
    createData('Frozen yoghurt etc', 'abd@gmail.com', 'Unban', 'pakistan'),
    createData('Frozen yoghurt etc', 'abd@gmail.com', 'Ban', 'pakistan'),
];

const TableCustomized = ({ data, searchUsername, banFilter }) => {
    const handleStatusChange = (row) => {
        // Toggle the player's status between Ban and Unban
        const updatedStatus = row.status === 'Ban' ? 'Unban' : 'Ban';
        row.status = updatedStatus;
    };

    // Apply filtering based on searchUsername and banFilter here
    const filteredData = data.filter(row => {
        const matchesUsername = !searchUsername || row.name.toLowerCase().includes(searchUsername.toLowerCase());
        const matchesBanFilter = banFilter === 'All' || row.status === banFilter;
        return matchesUsername && matchesBanFilter;
    });


    return (
        <Box sx={{
            backgroundColor: 'transparent'
        }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Player Status</TableCell>
                        <TableCell>Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.country}</TableCell>

                            <TableCell sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                                <Button
                                    variant='contained'
                                    onClick={() => handleStatusChange(row)}
                                    sx={{
                                        bgcolor: row.status === 'Ban' ? '#DC4C64' : '#4CAF50',
                                    }}
                                >
                                    {row.status === 'Ban' ? 'Unban' : 'Ban'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default TableCustomized;
