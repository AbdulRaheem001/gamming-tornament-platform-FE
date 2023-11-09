
import Box from '@mui/material/Box';
import Sidebar from './components/adminsidebar';

import React from 'react';
import { Card, CardContent, Typography, Chip, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const Payments = () => {
    // Define an array of withdrawal requests
    const withdrawalRequests = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            status: 'Pending',
            price: '$100',
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            status: 'Approved',
            price: '$200',
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            status: 'Rejected',
            price: '$200',
        },
        // Add more withdrawal requests as needed
    ];

    return (
         <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '100px' }}>
        <div>
            <Typography variant="h4" style={{ margin: '1rem 0', color: '#45f884' }}>
                Payment Requests
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align='center'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {withdrawalRequests.map((request, index) => (
                        <TableRow key={index}>
                            <TableCell>{request.name}</TableCell>
                            <TableCell>{request.email}</TableCell>
                            <TableCell>{request.price}</TableCell>
                            <TableCell>
                                <Chip
                                    label={request.status}
                                    color={request.status === 'Approved' ? 'success' : 'error'}
                                />
                            </TableCell>
                            <TableCell style={{
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                                <Button variant='contained' color='success'>Approved</Button>
                                <Button variant='contained' style={{
                                    backgroundColor: '#DC4C64',
                                }}>Rejected</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Typography variant="h5" style={{ margin: '2rem 0' }}>
                Payment Details Table
            </Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Requested Amount</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {withdrawalRequests.map((request, index) => (
                        <TableRow key={index}>
                            <TableCell>{request.name}</TableCell>
                            <TableCell>{request.email}</TableCell>
                            <TableCell>{request.price}</TableCell>
                            <TableCell>
                                <Chip
                                    label={request.status}
                                    color={request.status === 'Approved' ? 'success' : 'error'}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        </Box>
        </Box>
        </>
    );
};

export default Payments;
