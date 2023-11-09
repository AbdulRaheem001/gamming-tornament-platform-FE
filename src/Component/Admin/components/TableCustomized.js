import React, { useState, useEffect } from 'react';
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
import axios from 'axios';



const TableCustomized = ({ data, searchUsername, banFilter, url }) => {
    const [playerDetails, setPlayerDetails] = useState([]);
    useEffect(() => {
        console.log('line 11 ', url)
        axios
          .get(url)
          .then((res) => {
            setPlayerDetails(res.data);
            console.log('line 45', res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    const handleStatusChange = (row) => {
        // Toggle the player's status between Ban and Unban
        const updatedStatus = row.status === 'Ban' ? 'Unban' : 'Ban';
        row.status = updatedStatus;
    };

    // Apply filtering based on searchUsername and banFilter here
    const filteredData = data.filter(row => {
        const matchesUsername = !searchUsername || playerDetails.firstname.toLowerCase().includes(searchUsername.toLowerCase());
        const matchesBanFilter = banFilter === 'All' || row.status === banFilter;
        console.log(matchesUsername);
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
                    {playerDetails.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.firstName} {row.lastName}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phoneNumber}</TableCell>
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
