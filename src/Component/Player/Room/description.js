import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Navbar from '../../Commen/navbar2';
import Footer from '../../Commen/Footer';
import Roombar from './room';

const descriptions = [
  { type: 'Description', id: 1, title: 'Room Overview', content: 'This class covers a wide range of topics related to web development. By the end of the course, you will have a strong foundation in HTML, CSS, and JavaScript.' },
  // Add more descriptions as needed
];

const registrations = [
  { type: 'Registration', id: 1, title: 'Register Game', content: '', fee: 100 },
  // Add more registration information as needed
];

const prizes = [
  { type: 'Prize', id: 1, title: 'Winning Prize', content: '$1000' },
  // Add more prize information as needed
];

const timings = [
  { type: 'Timing', id: 1, title: 'Game Timing', content: 'Start: 10:00 AM | End: 2:00 PM' },
  // Add more timing information as needed
];

const InnerClassroom = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
  };

  const totalParticipants = 100;
  const joinedParticipants = 50;

  return (
    <>
      <Navbar />
      <Roombar />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop : '20px',
        marginBottom : '20px',
        padding: '0px 80px',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        {/* Registrations */}
        <Box sx={{ width: '50%', paddingRight: '20px', minWidth: 700 }}>
          {registrations.map((registration) => (
            <Card
              key={registration.id}
              sx={{
                boxShadow: 0,
                backgroundColor: 'primary',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #E71D1D',
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ color: '#E71D1D' }}>
                  {registration.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {registration.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {registration.content}
                </Typography>
                <Typography variant='body1' sx={{ color: 'blue', marginTop: '10px' }}>
                  Total Participants: {joinedParticipants}/{totalParticipants}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                  <AttachMoneyIcon sx={{ marginRight: '5px' }} />
                  <Typography variant='body2'>
                    Fee Amount: ${registration.fee}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Prizes */}
        <Box sx={{ width: '50%', paddingLeft: '20px' }}>
          {prizes.map((prize) => (
            <Card
              key={prize.id}
              sx={{
                boxShadow: 0,
                backgroundColor: '#fff',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #45f884',
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ color: '#45f884' }}>
                  {prize.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {prize.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {prize.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Registration Form Dialog */}
        
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Descriptions */}
        <Box sx={{ width: '50%', paddingRight: '20px', minWidth: 700 }}>
          {descriptions.map((description) => (
            <Card
              key={description.id}
              sx={{
                boxShadow: 0,
                backgroundColor: '#f1f8ff',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #1a73e8',
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ color: '#1a73e8' }}>
                  {description.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {description.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {description.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Timings */}
        <Box sx={{ width: '30%', paddingLeft: '20px' }}>
          {timings.map((timing) => (
            <Card
              key={timing.id}
              sx={{
                boxShadow: 0,
                backgroundColor: '#fff',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #ffa726',
              }}
            >
              <CardContent>
                                <Typography variant='h6' sx={{ color: '#ffa726' }}>
                  {timing.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {timing.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {timing.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
    <Footer />
    </>
  );
};

export default InnerClassroom;
