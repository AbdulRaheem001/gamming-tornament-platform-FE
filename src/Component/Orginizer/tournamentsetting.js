
// import React from 'react'
// import Sidebar from './Components/sidebar'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';



// function Settings() {
//     return (
//         <>
//             <Box sx={{ display: 'flex' }}>
//                 <Sidebar />
//                 <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '64px' }}>
//                     <h1>This is Settings page</h1>
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default Settings

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Button, FormControl, FormControlLabel, InputLabel, Radio, RadioGroup, Select, TextField } from '@mui/material';
import Sidebar from './Components/sidebar';
import MenuItem from '@mui/material/MenuItem';


const Settings = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('general');

    // State for the fields
    const [tournamentName, setTournamentName] = useState('Tournament Name');
    const [discipline, setDiscipline] = useState('Game 1');
    const [platformName, setPlatformName] = useState('PC');
    const [teamSize, setTeamSize] = useState(50);
    const [projectName, setProjectName] = useState(100);
    const [timezone, setTimezone] = useState('');

    const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <>
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
                                            readOnly: false, // Set this to true to disable editing
                                        }}
                                    />
                                    <FormControl variant="outlined" fullWidth margin='normal' >
                                        <InputLabel htmlFor="game-select">Select the Game</InputLabel>
                                        <Select
                                            label="Select the Game"
                                            value={discipline}
                                            onChange={(e) => setDiscipline(e.target.value)}
                                            inputProps={{
                                                name: 'game',
                                                id: 'game-select',
                                            }}
                                        >
                                            <MenuItem value="Game 1">Game 1</MenuItem>
                                            <MenuItem value="Game 2">Game 2</MenuItem>
                                            <MenuItem value="Game 3">Game 3</MenuItem>
                                            <MenuItem value="Game 4">Game 4</MenuItem>
                                            <MenuItem value="Game 5">Game 5</MenuItem>
                                            <MenuItem value="Game 6">Game 6</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl variant="outlined" fullWidth margin='normal' >
                                        <InputLabel htmlFor="platform-select">Select Platform</InputLabel>
                                        <Select
                                            label="Select Platform"
                                            value={platformName}

                                            onChange={(e) => setPlatformName(e.target.value)}
                                            inputProps={{
                                                name: 'platform',
                                                id: 'platform-select',
                                            }}
                                        >
                                            <MenuItem value="PC">PC</MenuItem>
                                            <MenuItem value="Mobile">Mobile</MenuItem>
                                            <MenuItem value="PS4">PS4</MenuItem>
                                            <MenuItem value="Xbox">Xbox</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        label="Number of Participants"
                                        variant="outlined"
                                        fullWidth
                                        value={teamSize}
                                        type='number'
                                        margin='normal'
                                        onChange={(e) => setTeamSize(e.target.value)}
                                        InputProps={{
                                            readOnly: false, // Set this to true to disable editing
                                        }}
                                    />
                                    <TextField
                                        label="Enter the Fee"
                                        variant="outlined"
                                        fullWidth
                                        value={projectName}
                                        type='number'
                                        margin='normal'
                                        onChange={(e) => setProjectName(e.target.value)}
                                        InputProps={{
                                            readOnly: false, // Set this to true to disable editing
                                        }}
                                    />
                                    <TextField
                                        label="Enter the Prize Pool"
                                        variant="outlined"
                                        fullWidth
                                        value={projectName}
                                        type='number'
                                        margin='normal'
                                        onChange={(e) => setProjectName(e.target.value)}
                                        InputProps={{
                                            readOnly: false, // Set this to true to disable editing
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
                                    <Button variant="contained" color="primary" fullWidth sx={{marginTop:'10px'}}>
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
                                        rows={5}
                                        InputProps={{
                                            readOnly: false, // Set this to true to disable editing
                                        }}
                                    />
                                    <TextField
                                        label="Rules"
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        rows={8}
                                        InputProps={{
                                            readOnly: false, // Set this to true to disable editing
                                        }}
                                    />
                                    <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '10px' }}>
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
