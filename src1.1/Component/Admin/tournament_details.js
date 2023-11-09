import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// Commenting out the lines with unresolved imports
// import TournamentAdd from 'src/views/form-layouts/TournamentAdd';
import Tabletournament from './components/tournaments';
// import TournamentsCom from './tournament';
import Sidebar from './components/adminsidebar';
import Box from '@mui/material/Box';


const MUITable = () => {
    const [open, setOpen] = useState(false);

    const handleCreate = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '100px' }}>
                    <Grid container spacing={6}>


                        <Grid item xs={12}>
                            <Typography variant='h4'>
                                Tournafest Tournaments
                            </Typography>
                            {/* Commenting out the component */}
                            <Tabletournament />
                        </Grid>
                        <Grid item xs={12}>
                            {/* Commenting out the component */}
                            {/* <TournamentsCom /> */}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default MUITable;