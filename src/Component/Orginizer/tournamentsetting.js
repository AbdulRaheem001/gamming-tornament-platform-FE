
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Button, FormControl, FormControlLabel, InputLabel, Radio, RadioGroup, Select, TextField } from '@mui/material';
import Sidebar from './Components/sidebar';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Settings = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('general');

    const [tournamentName, setTournamentName] = useState('');
    const [gameName, setGameName] = useState('');
    const [platformName, setPlatformName] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [tournamentFee, setTournamentFee] = useState('');
    const [description, setDescription] = useState('');
    const [gameRules, setGameRules] = useState('');
    const [tournamentPrize, setTournamentPrize] = useState('');
    const [timezone, setTimezone] = useState('');
    const [dateTime, setDateTime]=useState('');
    const tornamentId = sessionStorage.getItem("tornamentId");
    const [ tornamentData, setTornamentData ] = useState({});
    useEffect(() => {
        axios
          .get(`http://localhost:8000/tornament/getTournamentById/${tornamentId}`)
          .then((res) => {
            setTornamentData(res.data);
            setTournamentName(res.data.tournamentName);
            setGameName(res.data.gameID.name); // Assuming 'gameName' is the correct field name in your schema
            console.log('Data GAme Name', res.data.gameID.name);
            setPlatformName(res.data.gameID.platform); // Assuming 'platformName' is the field name for platform
            setTeamSize(res.data.teamSize);
            setTournamentFee(res.data.fee);
            setTournamentPrize(res.data.winningPrice);
            setDescription(res.data.description);
            setGameRules(res.data.rules);
            setTimezone(new Date(res.data.started).toISOString().substr(0, 16)); // Adjust time format as needed
          })
          .catch((err) => {
            console.log("Error", err);
          });
    }, [tornamentId]);
    const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
    };

    const updateTournament = async () => {
        let response
        try {

            const updatedData = {
                tournamentName,
                timezone,
                description,
                gameRules,
              };
              console.log('update data ', tornamentId);
              response = await axios.put(`http://localhost:8000/tornament/updateTournament/${tornamentId}`, updatedData);

              if (response && response.data) {
                  // Show success notification
                  toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_CENTER,
                  });
      
                  return response.data; // Return the response data if needed
              } else {
                  // Show error notification for unexpected response
                  toast.error("Error: Unexpected response format", {
                    position: toast.POSITION.TOP_CENTER,
                  });
              }
          } catch (error) {
              // Show error notification
              toast.error("Error Notification !", {
                  position: toast.POSITION.TOP_CENTER,
              });
              throw new Error(`Error updating tournament: ${error.message}`);
          }
      };
    return (
        <>
        <ToastContainer/>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
                    <div>
                        <Typography variant="h6" gutterBottom sx={{
                            padding: '1rem'
                        }}>
                            General Settings
                        </Typography>

                        <TabContext value={activeTab}>
                            <Box sx={{ width: '100%' }}>
                                <Tabs
                                    value={activeTab}
                                    onChange={handleChangeTab}
                                    indicatorColor="primary"
                                    textColor="primary"
                                >
                                    <Tab label="General" value="general" />
                                    <Tab label="Detail" value="detail" />
                                </Tabs>
                            </Box>

                            {/* General Settings */}
                            <TabPanel value="general">
                                <form>
                                    <TextField
                                        label="Tournament Name"
                                        variant="outlined"
                                        fullWidth
                                        value={tournamentName}
                                        margin='normal'
                                        onChange={(e) => setTournamentName(e.target.value)}
                                        InputProps={{
                                            readOnly: false,
                                        }}
                                    />
                                    <FormControl variant="outlined" fullWidth margin='normal' >
                                        
                                        <TextField
                                            label="Game Name"
                                            value={gameName}
                                            InputProps={{
                                                readOnly: true, 
                                                style: { opacity: 0.6, pointerEvents: 'none' },
                                            }}
                                        >
                                        </TextField>
                                    </FormControl>
                                    <FormControl variant="outlined" fullWidth margin='normal' >
                                        <TextField
                                            label="Platform Name"
                                            value={platformName}
                                            InputProps={{
                                                readOnly: true, 
                                                style: { opacity: 0.6, pointerEvents: 'none' },
                                            }}
                                        >
                                        </TextField>
                                    </FormControl>
                                    <TextField
                                        label="Number of Participants"
                                        variant="outlined"
                                        fullWidth
                                        value={teamSize}
                                        type='number'
                                        margin='normal'
                                        InputProps={{
                                            readOnly: true, 
                                            style: { opacity: 0.6, pointerEvents: 'none' },
                                        }}
                                    />
                                    <TextField
                                        label="Enter the Fee"
                                        variant="outlined"
                                        fullWidth
                                        value={tournamentFee}
                                        type='number'
                                        margin='normal'
                                        InputProps={{
                                            readOnly: true, 
                                            style: { opacity: 0.6, pointerEvents: 'none' },
                                        }}
                                    />
                                    <TextField
                                        label="Enter the Prize Pool"
                                        variant="outlined"
                                        fullWidth
                                        value={tournamentPrize}
                                        type='number'
                                        margin='normal'
                                        InputProps={{
                                            readOnly: true, 
                                            style: { opacity: 0.6, pointerEvents: 'none' },
                                        }}
                                    />
                                    <TextField
                                        label="Time and Date"
                                        type="datetime-local"
                                        variant="outlined"
                                        fullWidth
                                        margin='normal'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={timezone}
                                        onChange={(e) => setTimezone(e.target.value)}
                                        InputProps={{
                                            readOnly: false, // Set this to true to disable editing
                                        }}
                                    />
                                    <Button variant="contained" color="primary" fullWidth sx={{marginTop:'10px'}} onClick={()=>updateTournament()}>
                                        Update
                                    </Button>
                                </form>
                            </TabPanel>

                            {/* Detail Settings */}
                            <TabPanel value="detail">
                                <form>
                                    <TextField
                                        label="Description"
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        value={description}
                                        rows={5}
                                        onChange={(e)=>setDescription(e.target.value)}
                                        InputProps={{
                                            readOnly: false,
                                        }}
                                    />
                                    <TextField
                                        label="Rules"
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        rows={8}
                                        value={gameRules}
                                        onChange={(e)=>setGameRules(e.target.value)}
                                        InputProps={{
                                            readOnly: false, 
                                        }}
                                    />
                                    <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '10px' }} onClick={()=>updateTournament()}>
                                        Update
                                    </Button>
                                </form>
                            </TabPanel>
                        </TabContext>
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Settings;
