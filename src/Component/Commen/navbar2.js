import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    IconButton,
    Avatar,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the icon you want to use for the user avatar
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Import the icon for the wallet
import GamesIcon from '@mui/icons-material/Games'; // Import the icon for the Games tab
import CoinIcon from '@mui/icons-material/MonetizationOn'; // Import the icon for the Coin Shop tab
import HomeIcon from '@mui/icons-material/Home'; // Import the icon for the Home tab
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            sx={{
                backgroundColor: '#000000',
                color: '#ffffff',
                boxShadow: 'none',
                borderBottom: '1px solid #45f884',
                padding: '10px 80px',
                height: '100px',
                position: 'sticky',
            }}
        >
            <Toolbar>
                <Typography
                    variant="h3"
                    component="div"
                    sx={{ flexGrow: 6, color: '#45f884', fontFamily: 'cursive' }}
                >
                    T<span style={{ color: '#fff' }}>our</span>nafest
                </Typography>

                
                <Link to='/gamelist'> {/* Link to the "gamelist" page */}
                    <Button
                        color="inherit"
                        sx={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            fontWeight: '300',
                            '&:hover': {
                                color: '#45f884',
                            },
                        }}
                    >
                        <GamesIcon sx={{ marginRight: 1 }} />
                        Games
                    </Button>
                </Link>
                <Link to='/wallet'>
                    <Button
                        color="inherit"
                        sx={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            fontWeight: '300',
                            '&:hover': {
                                color: '#45f884',
                            },
                        }}
                    >
                        <AttachMoneyIcon sx={{ marginRight: 1 }} /> Balance
                    </Button>
                </Link>

                {/* User Avatar Button */}
                <IconButton
                    color="inherit"
                    sx={{ color: '#fff', '&:hover': { color: '#45f884' }}   }  
                    onClick={handleMenuOpen}
                >
                    <Avatar>
                        <AccountCircleIcon />
                    </Avatar>
                </IconButton>

                {/* Dropdown Menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <Link to='/settings' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <AccountCircleIcon sx={{ marginRight: 1 }} /> Settings
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to='/mytournaments' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <AccountCircleIcon sx={{ marginRight: 1 }} /> My Tournaments
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to='/logout' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <AccountCircleIcon sx={{ marginRight: 1 }} /> Logout
                        </Link>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;