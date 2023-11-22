import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { useNavigate } from 'react-router-dom';

import Appbar from './adminbar'; // Import the Appbar component

const drawerWidth = 240;

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: '2px solid #45f884',
                        backgroundColor: 'black', // Background color of the sidebar
                        color: 'white', // Font color of the sidebar
                    },
                }}

            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/admin")}>
                                <ListItemIcon sx={{ color: '#45f884' }}>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/admin_games")}>
                                <ListItemIcon sx={{ color: '#45f884' }}> 
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>


                    </List>
                    <Divider sx={{ backgroundColor: 'white' }} />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/admin_games")}>
                                <ListItemIcon sx={{ color: '#45f884' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Games" />
                            </ListItemButton >
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/player_details")}>
                                <ListItemIcon sx={{ color: '#45f884' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Player" />
                            </ListItemButton >
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/organizer_details")}>
                                <ListItemIcon sx={{ color: '#45f884' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Organizer" />
                            </ListItemButton >
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/tournament_details")}>
                                <ListItemIcon sx={{ color: '#45f884' }}> 
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Tournament" />
                            </ListItemButton >
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/coin_package")}>
                                <ListItemIcon sx={{ color: '#45f884' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Coins" />
                            </ListItemButton >
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate("/payments")}>
                                <ListItemIcon sx={{ color: '#45f884' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Payment Requests" />
                            </ListItemButton >
                        </ListItem>


                    </List>
                </Box>
            </Drawer>
            <Appbar /> {/* Render the Appbar component here */}
        </Box>
    );
}
