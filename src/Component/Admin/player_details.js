import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "./components/adminsidebar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TableCustomized from "./components/TableCustomized";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";

const createData = (name, email, status, country) => {
  return { name, email, status, country };
};
const Player_details = () => {
  const [open, setOpen] = useState(false);
  const [searchUsername, setSearchUsername] = useState("");
  const [banFilter, setBanFilter] = useState("All");
  const [playerCount, setPlayerCount] = useState();
  const handleCreate = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/userCount`)
      .then((response) => {
        console.log(response.data);
        setPlayerCount(response.data.playerCount);
      })
      .catch((error) => {
        console.error("Error fetching counts:", error);
      });
  }, []);
  const totalPlayers = 1000;

  // Define the 'rows' data here
  const rows = [
    createData("Frozen yoghurt etc", "abd@gmail.com", "Ban", "pakistan"),
    createData("Ice cream sandwich", "abd@gmail.com", "Unban", "pakistan"),
    createData("Eclair cream sandw", "abd@gmail.com", "Ban", "pakistan"),
    createData("Frozen yoghurt etc", "abd@gmail.com", "Unban", "pakistan"),
    createData("Frozen yoghurt etc", "abd@gmail.com", "Ban", "pakistan"),
  ];

  const handleSearch = (e) => {
    setSearchUsername(e.target.value);
  };

  const handleFilter = (e) => {
    setBanFilter(e.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "100px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card>
                <CardHeader
                  title="Tournafest Players"
                  titleTypographyProps={{ variant: "h6" }}
                />
                <CardContent>
                  <Typography variant="body2">
                    There are currently <strong>{playerCount}</strong> players
                    registered .
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Stack direction="row" spacing={1}>
                <TextField
                  label="Search Username"
                  value={searchUsername}
                  onChange={handleSearch}
                />
                <IconButton
                  color="primary"
                  aria-label="search"
                  component="span"
                >
                  <SearchIcon />
                </IconButton>
                <FormControl variant="outlined">
                  <InputLabel
                    htmlFor="ban-filter"
                    style={{ background: "#fff", paddingLeft: "1px" }}
                  >
                    Ban Filter
                  </InputLabel>
                  <Select
                    value={banFilter}
                    onChange={handleFilter}
                    label="Ban Filter"
                    sx={{ width: "150px" }}
                    inputProps={{
                      name: "banFilter",
                      id: "ban-filter",
                    }}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Ban">Ban</MenuItem>
                    <MenuItem value="Unban">Unban</MenuItem>
                  </Select>
                </FormControl>
                <IconButton
                  color="primary"
                  aria-label="filter"
                  component="span"
                >
                  <FilterListIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Tournafest Players</Typography>
              {/* Pass the 'rows' data here */}
              <TableCustomized
                data={rows}
                searchUsername={searchUsername}
                banFilter={banFilter}
                url="http://localhost:8000/user/players"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Player_details;
