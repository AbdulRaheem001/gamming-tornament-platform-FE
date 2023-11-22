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

import Appbar from './appbar'; // Import the Appbar component

const drawerWidth = 240;

export default function Sidebar() {
  const navigate = useNavigate();
  const tornamentId = sessionStorage.getItem("tornamentId");
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',borderRight :'2px solid #45f884',backgroundColor: 'black', // Background color of the sidebar
          color: 'white', // Font color of the sidebar
      },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/organizer_panel")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/mytournaments")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="My Tournaments" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/creat_Tournament")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Create Tournaments" />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider sx={{ backgroundColor: '#45f884' }} />
          {/* I want to add condition if tornamentId has value the below nevigations show otherwise not show */}
          {tornamentId? (<List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/overview")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton >
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/room_settings")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Room Settings" />
              </ListItemButton >
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/registered_players")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Player Details" />
              </ListItemButton >
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/organizer_comments")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Discussion" />
              </ListItemButton >
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/final_standings")}>
                <ListItemIcon sx={{ color: '#45f884' }}>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Final Results" />
              </ListItemButton >
            </ListItem>


          </List>):null }
          
          
        </Box>
      </Drawer>
      <Appbar /> {/* Render the Appbar component here */}
    </Box>
  );
}
