import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';

export default function Appbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [walletBalance, setWalletBalance] = React.useState(1000);
    const navigate = useNavigate();

    const handleUserAvatarMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleUserAvatarMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'black', // Set the background color to black
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    padding: '2px 50px',
                }}
            >
                <Toolbar sx={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                    <div style={{ flexGrow: 1 }} />
                    <IconButton
                        color="inherit"
                        onClick={handleUserAvatarMenuOpen}
                    >
                        <AccountCircleIcon sx={{ fontSize: '2.2rem' }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleUserAvatarMenuClose}
                    >
                        <MenuItem onClick={() => navigate("/settings")}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Setting" />
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/complain")}>
                            <ListItemIcon>
                                <ReportProblemIcon />
                            </ListItemIcon>
                            <ListItemText primary="Complain" />
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/logout")}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
}
