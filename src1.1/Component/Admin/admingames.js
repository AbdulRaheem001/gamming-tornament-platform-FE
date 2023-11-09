import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem } from '@mui/material';
import Sidebar from './components/adminsidebar';

const TableGames = () => {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [fee, setFee] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileInputChange = (e) => {
    // Handle file input change here
  };

  const coinItems = [
    { image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    { image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },

    { image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    { image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    { image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    { image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    { image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    { image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    { image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    { image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
  ];

  const style = { 
    justifyContent:'flex-end',
  }
  

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '100px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h4'>
                Tournafest Games
              </Typography>
            </Grid>
          </Grid>
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin:"20px ",}}>
              <Button variant="contained" color="primary" onClick={handleClickOpen} style={style}>
                Add Game
              </Button>
            </div>
            {/* <Button variant="contained" color="primary"onClick={handleClickOpen} style={{style}}>
              Add Game
            </Button> */}

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit New Project</DialogTitle>
              <DialogContent>
                <TextField
                  label="Project Name"
                  variant="outlined"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  margin="normal"
                  sx={{
                    width: '100%',
                  }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  margin="normal"
                  multiline
                  rows={3}
                />
                <Select
                  value={'All'}
                  label="Platform"
                  fullWidth
                >
                  <MenuItem value="abc">abc</MenuItem>
                  <MenuItem value="bca">bca</MenuItem>
                  <MenuItem value="abc">abc</MenuItem>
                  <MenuItem value="bca">bca</MenuItem>
                </Select>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <TextField
                    label="Fee"
                    variant="outlined"
                    fullWidth
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                    margin="normal"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    style={{
                      width: '100%',
                      margin: '1rem 0',
                      padding: '0.5rem',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      backgroundColor: '#f8f8f8',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
            <div style={{ flexGrow: 1 }}>
              <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {coinItems.map((item, index) => (
                  <Grid key={index} item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card style={{ width: '85%', border: '1px solid #333' }}>
                      <CardContent>
                        <img src={item.image} style={{ maxWidth: '100%', marginTop: 16 }} />
                        <Typography style={{ color: '#000' }}>Game</Typography>
                        <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClickOpen}
                          >
                            Edit
                          </Button>
                          <Button variant="contained" color="primary">Delete</Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TableGames;
