import React, { useReducer, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Sidebar from "./Components/sidebar";
import { getUserId } from './Components/userID';
const initialState = {
  platform: "All",
  searchTerm: "",
  openDialogBox: false,
  timezone: "",
  projectName: "",
  tournamentName: "",
  teamSize: "",
  prizePool: "",
  organizerID: getUserId(),
  gameData: [],
  selectedGame: null,
};

const reducer = (state, action) => {
  console.log("LINE 37 REDUCER", state, action);
  switch (action.type) {
    case "setPlatform":
      return { ...state, platform: action.payload };
    case "setSearchTerm":
      return { ...state, searchTerm: action.payload };
    case "setOpenDialogBox":
      return { ...state, openDialogBox: action.payload };
    case "setTimezone":
      return { ...state, timezone: action.payload };
    case "setProjectName":
      return { ...state, projectName: action.payload };
    case "setTournamentName":
      return { ...state, tournamentName: action.payload };
    case "setTeamSize":
      return { ...state, teamSize: action.payload };
    case "setPrizePool":
      return { ...state, prizePool: action.payload };
    case "setOrganizerID":
      return { ...state, organizerID: action.payload };
    case "setGameData":
      return { ...state, gameData: action.payload };
    case "setSelectedGame":
      return { ...state, selectedGame: action.payload };
    default:
      return state;
  }
};

const CreatTournament = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Destructure state for easier access
  const {
    platform,
    searchTerm,
    openDialogBox,
    timezone,
    projectName,
    tournamentName,
    teamSize,
    prizePool,
    organizerID,
    gameData,
    selectedGame,
  } = state;
  

  const handlePlatformChange = (event) => {
    dispatch({ type: "setPlatform", payload: event.target.value });
  };

  const handleSetSearchTerm = (term) => {
    dispatch({ type: "setSearchTerm", payload: term });
  };

  const handleSetOpenDialogBox = (isOpen) => {
    dispatch({ type: "setOpenDialogBox", payload: isOpen });
  };

  const handleSetTimezone = (value) => {
    dispatch({ type: "setTimezone", payload: value });
  };

  const handleSetProjectName = (value) => {
    dispatch({ type: "setProjectName", payload: value });
  };

  const handleSetTournamentName = (value) => {
    dispatch({ type: "setTournamentName", payload: value });
  };

  const handleSetTeamSize = (value) => {
    dispatch({ type: "setTeamSize", payload: value });
  };

  const handleSetPrizePool = (value) => {
    dispatch({ type: "setPrizePool", payload: value });
  };

  const handleSetOrganizerID = (value) => {
    dispatch({ type: "setOrganizerID", payload: value });
  };
  const handleSetSelectedGame = (game) => {
    dispatch({ type: "setSelectedGame", payload: game });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/game/allGames")
      .then((response) => {
        dispatch({ type: "setGameData", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const toBase64 = (arr) => {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  };
  const processedGame = gameData.map((game) => ({
    ...game,
    imageUrl: game.image
      ? `data:image/png;base64,${toBase64(game.image.data)}`
      : null,
  }));
  const handleCreateProject =
    (() => {
      console.log('ORG ID->',getUserId())
      handleSetOrganizerID(getUserId())
      console.log("lin1 134");
      const tournamentData = {
        tournamentName,
        teamSize,
        fee: projectName,
        winningPrice: prizePool,
        gameID: selectedGame,
        organizerID: getUserId(),
        started: Date.now(),
        description: "No description given",
        rules: "No rule yet defined",
        status: "Start",
      };
      console.log("Line 158 ->",tournamentData);
      axios
        .post(
          "http://localhost:8000/tornament/createTournament",
          tournamentData
        )
        .then((response) => {
          console.log("line ->165");
          console.log("Tournament created successfully:", response.data);
        })
        .catch((error) => {
          console.log("line ->169")
          console.error("Error creating tournament:", error);
        });

      handleSetOpenDialogBox(false);
    });

  const handleCloseDialog = () => {
    handleSetOpenDialogBox(false);
    console.log("line 129 : ", selectedGame);
  };

  const handleOpenDialogBox = (game) => {
    handleSetSelectedGame(game);
    handleSetOpenDialogBox(true);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "64px" }}>
          <Box
            style={{
              flexGrow: 1,
              bgcolor: "#f5f5f5",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
                marginBottom: "20px",
              }}
            >
              <TextField
                label="Search Games"
                variant="outlined"
                style={{ minWidth: "600px" }}
                value={searchTerm}
                onChange={(e) => handleSetSearchTerm(e.target.value)}
              />
              <FormControl variant="outlined" style={{ minWidth: "300px" }}>
                <InputLabel>Platform</InputLabel>
                <Select
                  value={platform}
                  onChange={handlePlatformChange}
                  label="Platform"
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="PC">PC</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="Play-Station">Play-Station</MenuItem>
                  <MenuItem value="X-Box">X-Box</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "normal",
                alignItems: "stretch",
                minHeight: "100vh",
                padding: "16px",
              }}
            >
              {processedGame.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                  <Card
                    style={{
                      width: "100%",
                      maxWidth: 345,
                      backgroundColor: "white",
                      border: "1px solid green",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      transition: "0.3s",
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt="Game"
                      style={{
                        width: "250px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <center>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          component="div"
                        >
                          <strong>{item.name}</strong>
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          component="div"
                        >
                          <strong>{item.platform}</strong>
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                          component="div"
                        >
                          Fee : <strong>${item.fee}</strong>
                        </Typography>
                      </center>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{
                          marginTop: 16,
                          backgroundColor: "#45f884",
                          color: "#000",
                        }}
                        onClick={() => handleOpenDialogBox(item._id)}
                      >
                        Create Tournament
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Dialog open={openDialogBox} onClose={handleCloseDialog}>
              <DialogTitle>Create New Tournament</DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Tournament Name"
                      variant="outlined"
                      fullWidth
                      value={tournamentName}
                      onChange={(e) => handleSetTournamentName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Number of Participants"
                      variant="outlined"
                      fullWidth
                      value={teamSize}
                      type="number"
                      onChange={(e) => handleSetTeamSize(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Enter the Fee"
                      variant="outlined"
                      fullWidth
                      value={projectName}
                      type="number"
                      onChange={(e) => handleSetProjectName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Enter the Prize Pool"
                      variant="outlined"
                      fullWidth
                      value={prizePool}
                      type="number"
                      onChange={(e) => handleSetPrizePool(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Time and Date"
                      type="datetime-local"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={timezone}
                      onChange={(e) => handleSetTimezone(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCreateProject} // No parentheses
                >
                  Create
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreatTournament;
