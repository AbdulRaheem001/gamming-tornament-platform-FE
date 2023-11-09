import React from 'react';
import Sidebar from './Components/sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../Commen/Footer';
import Navbar from '../Commen/Navbar';
import { Card, CardContent, Grid, Button } from '@mui/material';

function Overview() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
        <Box p={2}>
          {/* 1st Row */}
          <Box mb={2}>
            <Card>
              <CardContent>
                <Typography variant="h4" sx={{ borderBottom: '1px solid #333',mb :'10px' }}>
                  Tournament Name
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Description
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad
                  consequatur quos delectus ex in officia quia molestias quasi hic.
                  Quam sit similique tempora reprehenderit aut corporis eius autem
                  enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, esse temporibus commodi corrupti doloribus culpa
                  suscipit vero veritatis dolorem debitis sequi vel recusandae,
                  alias consectetur deleniti hic laboriosam illum laudantium.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* 2nd Row */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: '4px solid blue' }}>
                <CardContent>
                  <Typography variant="h6">Price</Typography>
                  <Typography variant="body2" color="textSecondary">
                    $50
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: '4px solid blue' }}>
                <CardContent>
                  <Typography variant="h6">Fee</Typography>
                  <Typography variant="body2" color="textSecondary">
                    $10
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: '4px solid blue' }}>
                <CardContent>
                  <Typography variant="h6">Timing</Typography>
                  <Typography variant="body2" color="textSecondary">
                    12:00 PM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ borderLeft: '4px solid blue' }}>
                <CardContent>
                  <Typography variant="h6">Status</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Draft
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* 3rd Row */}
          <Box mb={2}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{mb:'10px'}}>Participants</Typography>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <div>
                    <Typography variant="h6" color="textSecondary">
                      Total Participants
                    </Typography>
                    <Typography variant="h3">100</Typography>
                  </div>
                  <div>
                    <Typography variant="h6" color="textSecondary">
                      Registered Participants
                    </Typography>
                    <Typography variant="h3">50</Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* 4th Row */}
          <Box mb={2}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: '10px' }}>Winner</Typography>
                <Typography variant="body2" color="textSecondary">
                  Sample Name
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Publish Button */}
          <Box mt={2}>
            <Button variant="outlined" color="primary" size='Large' sx={{ marginLeft:'90%' }}>
              Publish
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Overview;
