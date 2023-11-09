import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';



const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67,
  },
  '&.Mui-selected': {
    color: '#FF5722', // Change the color for the selected tab
  },
  '&:hover': {
    color: '#FF5722', // Change the color for the hovered tab
  },
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Room = () => {
  const [value, setValue] = useState('description');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: '100%',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'none',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 0,
            borderRadius: 'inherit',
            opacity: 0.15,
          },
        }}
      >
        <TabContext >
          <TabList
            onChange={handleChange}
            aria-label='room-tabs'
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
          >
            <Tab
              value='description'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Description</TabName>
                </Box>
              }
              onClick={() => navigate("/room_description")}
            />
            <Tab
              value='participants'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Participants</TabName>
                </Box>
              }
              onClick={() => navigate("/room_participants")}
            />
            <Tab
              value='rules'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Rules</TabName>
                </Box>
              }
              onClick={() => navigate("/room_rules")}
            />
            <Tab
              value='comments'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Comments</TabName>
                </Box>
              }
              onClick={() => navigate("/room_comments")}
            />
            <Tab
              value='results'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TabName>Results</TabName>
                </Box>
              }
              onClick={() => navigate("/room_results")}
            />
          </TabList>
        </TabContext>
      </Card>


    </>
  );
};

export default Room;
