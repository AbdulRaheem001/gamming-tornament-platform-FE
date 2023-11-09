
import Box from '@mui/material/Box';
import Sidebar from './components/adminsidebar';

import React, { useState } from 'react';
import {
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';

const CoinPage = () => {
    const [packages, setPackages] = useState([
        { id: 1, name: 'Package 1', Amount: 10, price: 232 },
        { id: 2, name: 'Package 2', Amount: 20, price: 232 },
    ]);

    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [editedPackage, setEditedPackage] = useState({
        id: null,
        name: '',
        Amount: '',
        price: '',
    });

    const handleAddPackage = (newPackage) => {
        setPackages([...packages, newPackage]);
        setOpenAddDialog(false);
    };

    const handleEditPackage = () => {
        const updatedPackages = packages.map((pkg) =>
            pkg.id === editedPackage.id ? editedPackage : pkg
        );
        setPackages(updatedPackages);
        setOpenEditDialog(false);
    };

    const handleDeletePackage = (packageId) => {
        const updatedPackages = packages.filter((pkg) => pkg.id !== packageId);
        setPackages(updatedPackages);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '100px' }}>
                <Grid container spacing={12}>
            <Grid item xs={12}>
                <Button variant="contained" onClick={() => setOpenAddDialog(true)}>
                    Add New Package
                </Button>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {packages.map((pkg) => (
                                <TableRow key={pkg.id}>
                                    <TableCell>{pkg.id}</TableCell>
                                    <TableCell>{pkg.name}</TableCell>
                                    <TableCell>{pkg.Amount}</TableCell>
                                    <TableCell>{pkg.price}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                setSelectedPackage(pkg);
                                                setOpenEditDialog(true);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDeletePackage(pkg.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            {/* Add Package Dialog */}
            <Dialog
                open={openAddDialog}
                onClose={() => setOpenAddDialog(false)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Add New Package</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField
                        label="Name"
                        fullWidth
                        value={editedPackage.name}
                        onChange={(e) => setEditedPackage({ ...editedPackage, name: e.target.value })}
                    />
                    <TextField
                        label="Amount"
                        fullWidth
                        value={editedPackage.Amount}
                        onChange={(e) => setEditedPackage({ ...editedPackage, Amount: e.target.value })}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        value={editedPackage.price}
                        onChange={(e) => setEditedPackage({ ...editedPackage, price: e.target.value })}
                    />
                    <Button variant="contained" onClick={handleAddPackage}>
                        Add
                    </Button>
                </DialogContent>
            </Dialog>

            {/* Edit Package Dialog */}
            <Dialog
                open={openEditDialog}
                onClose={() => setOpenEditDialog(false)}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Edit Package</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField
                        label="Name"
                        fullWidth
                        value={editedPackage.name}
                        onChange={(e) => setEditedPackage({ ...editedPackage, name: e.target.value })}
                    />
                    <TextField
                        label="Amount"
                        fullWidth
                        value={editedPackage.Amount}
                        onChange={(e) => setEditedPackage({ ...editedPackage, Amount: e.target.value })}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        value={editedPackage.price}
                        onChange={(e) => setEditedPackage({ ...editedPackage, price: e.target.value })}
                    />
                    <Button variant="contained" onClick={handleEditPackage}>
                        Save
                    </Button>
                </DialogContent>
            </Dialog>
        </Grid>
                </Box>
            </Box>  
        </>
    );
};

export default CoinPage;
