import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem } from '@mui/material';
import Sidebar from './components/adminsidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableGames = () => {
  // State for the dialog box and form fields
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [fee, setFee] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [imageFile, setImageFile] = useState();
  const [fetchGame, setFetchGame] = useState([])
  const [gameData, setGameData] = useState({
    Game_name: "",
    Game_Platform: "",
    Game_fee: "",
    image: null,
  });

  // Function to open the dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog box
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle file input change (not implemented)
  const handleFileInputChange = (e) => {
    // Handle file input change here
  };

  // List of sample game items (you can replace this with actual data from the server)
  const coinItems = [
    { image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    { image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    // Add more game items as needed
  ];

  const style = {
    justifyContent: 'flex-end',
  };

  // Function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGameData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    setGameData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Game_name", gameData.Game_name);
    formData.append("Game_Platform", gameData.Game_Platform);
    formData.append("Game_fee", gameData.Game_fee);
    formData.append("image", imageFile);

    try {
      // Make a POST request to add the game
      const response = await axios.post(
        "http://localhost:8000/game/addGame",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Displaying the Toastify notification
    toast("Game Added Successfully.", { position: toast.POSITION.TOP_CENTER });

      // Show a success message
      setSuccessMessage("Game added successfully");
      setOpen(false); // Close the dialog box
    } catch (error) {
      console.log(error.response.data);
      //toast.error(error.response.data); // Show an error message
      toast.error("Error !. Game not added.",{position:toast.POSITION.TOP_CENTER})
    }
  };

  // Initial list of games (you can replace this with actual data from the server)
  const initialGamesList = [
    { Game_name: 'Sample Game 1', image: 'sample_image_1.jpg' },
    { Game_name: 'Sample Game 2', image: 'sample_image_2.jpg' },
    // Add more games as needed
  ];

  // State to store the list of games fetched from the server
  const [gamesList, setGamesList] = useState(initialGamesList);

  // Fetch the list of games when the component mounts
  const toBase64 = (arr) => {
    return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/game/allGames")
      .then((response) => {
        setFetchGame(response.data);
        console.log('Line 67', response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const processedGame = fetchGame.map((game) => ({
    ...game,
    imageUrl: game.image
      ? `data:image/png;base64,${toBase64(game.image.data)}`
      : null,
  }));

  return (
    <>
    <ToastContainer/>
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
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: "20px " }}>
              <Button variant="contained" color="primary" onClick={handleClickOpen} style={style}>
                Add Game
              </Button>
            </div>

            {/* Dialog for adding a new game */}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit New Project</DialogTitle>
              <DialogContent>
                <TextField
                  type="text"
                  name="Game_name"
                  value={gameData.Game_name}
                  onChange={handleChange}
                  required
                  label="Game Name"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    width: '100%',
                  }}
                />
                <Select
                  label="Platform"
                  fullWidth
                  name="Game_Platform"
                  value={gameData.Game_Platform}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select a Platform</MenuItem>
                  <MenuItem value="PC">PC</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="Play-Station">Play-Station</MenuItem>
                  <MenuItem value="X-Box">X-Box</MenuItem>
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
                    type="number"
                    name="Game_fee"
                    value={gameData.Game_fee}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
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
                <Button onClick={handleSubmit} encType="multipart/form-data">
                  Save
                </Button>
              </DialogActions>
            </Dialog>

            {/* Display the list of games */}
            <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              {processedGame.map((game, index) => (
                <Grid key={index} item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Card style={{ width: '85%', border: '1px solid #333' }}>
                    <CardContent>
                      <img src={game.imageUrl} style={{ maxWidth: '100%', marginTop: 16 }} />
                      <Typography style={{ color: '#000' }}>{game.name}</Typography>
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

            {/* The rest of your component code */}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TableGames;
