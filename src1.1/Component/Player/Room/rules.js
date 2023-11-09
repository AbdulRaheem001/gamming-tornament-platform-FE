import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Navbar from '../../Commen/Navbar';
import Footer from '../../Commen/Footer';
import Roombar from './room';

const rules = [
  { type: 'Rule', id: 1, title: 'Rule 1', content: 'Follow fair play and sportsmanship.' },
  { type: 'Rule', id: 2, title: 'Rule 2', content: 'Respect other participants and organizers.' },
  // Add more rules as needed
];

const RulesPage = () => {
  return (
    <>
      <Navbar />
      <Roombar />
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      // padding: '20px', // Adjust the padding as needed
      flexDirection: 'column',
        marginTop: '20px',
        marginBottom: '20px',
        padding: '0px 80px',
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
        {rules.map(rule => (
          <Card
            key={rule.id}
            sx={{ boxShadow: 0, backgroundColor: '#f1f8ff', marginBottom: '15px', padding: '10px', borderLeft: '3px solid #1a73e8' }}
          >
            <CardContent>
              <Typography variant='h6' sx={{ color: '#1a73e8' }}>
                {rule.type}
              </Typography>
              <Typography variant='subtitle1'>
                {rule.title}
              </Typography>
              <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                {rule.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    <Footer />
    </>
  );
};

export default RulesPage;
