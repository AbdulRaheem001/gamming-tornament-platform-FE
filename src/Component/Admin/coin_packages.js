import Box from "@mui/material/Box";
import Sidebar from "./components/adminsidebar";

import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import axios from "axios";

const CoinPage = () => {
  const [packages, setPackages] = useState([]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [editedPackage, setEditedPackage] = useState({
    name: "",
    coin: "",
    price: "",
  });

  const handleAddPackage = () => {
    const formData = new FormData();
    formData.append("name", editedPackage.name);
    formData.append("coin", editedPackage.coin);
    formData.append("price", editedPackage.price);
    console.log("line 11", editedPackage);
    axios
      .post("http://localhost:8000/package/addPackage", editedPackage)
      .then((response) => {
        console.log("Package Added Successfully:", response.data);
        setOpenAddDialog(false);
      })
      .catch((err) => {
        console.log("Something went wrong:", err);
        // Handle the error, e.g., display an error message to the user
      });
  };

  const handleEditPackage = () => {
    const updatedPackages = packages.map((pkg) =>
      pkg.id === editedPackage.id ? editedPackage : pkg
    );
    setPackages(updatedPackages);
    setOpenEditDialog(false);
  };

  const handleDeletePackage = (packageId) => {
    const updatedPackages = packages.filter((pkg) => pkg.id !== packageId);
    setPackages(updatedPackages);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/package/getPackage").then((res) => {
      setPackages(res.data);
    });
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "100px" }}>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={() => setOpenAddDialog(true)}
              >
                Add New Package
              </Button>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {packages.map((pkg, index) => (
                      <TableRow key={pkg.id}>
                        <TableCell>{++index}</TableCell>
                        <TableCell>{pkg.name}</TableCell>
                        <TableCell>{pkg.coin}</TableCell>
                        <TableCell>{pkg.price}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            onClick={() => {
                              setSelectedPackage(pkg);
                              setOpenEditDialog(true);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleDeletePackage(pkg.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            {/* Add Package Dialog */}
            <Dialog
              open={openAddDialog}
              onClose={() => setOpenAddDialog(false)}
              fullWidth
              maxWidth="sm"
            >
              <DialogTitle>Add New Package</DialogTitle>
              <DialogContent
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <TextField
                  label="Name"
                  fullWidth
                  value={editedPackage.name}
                  onChange={(e) =>
                    setEditedPackage({ ...editedPackage, name: e.target.value })
                  }
                />
                <TextField
                  label="Coin"
                  fullWidth
                  value={editedPackage.coin}
                  onChange={(e) =>
                    setEditedPackage({
                      ...editedPackage,
                      coin: e.target.value,
                    })
                  }
                />
                <TextField
                  label="Price"
                  fullWidth
                  value={editedPackage.price}
                  onChange={(e) =>
                    setEditedPackage({
                      ...editedPackage,
                      price: e.target.value,
                    })
                  }
                />
                <Button variant="contained" onClick={handleAddPackage}>
                  Add
                </Button>
              </DialogContent>
            </Dialog>

            {/* Edit Package Dialog */}
            <Dialog
              open={openEditDialog}
              onClose={() => setOpenEditDialog(false)}
              fullWidth
              maxWidth="sm"
            >
              <DialogTitle>Edit Package</DialogTitle>
              <DialogContent
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <TextField
                  label="Name"
                  fullWidth
                  value={editedPackage.name}
                  onChange={(e) =>
                    setEditedPackage({ ...editedPackage, name: e.target.value })
                  }
                />
                <TextField
                  label="Coin"
                  fullWidth
                  value={editedPackage.coin}
                  onChange={(e) =>
                    setEditedPackage({
                      ...editedPackage,
                      coin: e.target.value,
                    })
                  }
                />
                <TextField
                  label="Price"
                  fullWidth
                  value={editedPackage.price}
                  onChange={(e) =>
                    setEditedPackage({
                      ...editedPackage,
                      price: e.target.value,
                    })
                  }
                />
                <Button variant="contained" onClick={() => handleEditPackage()}>
                  Save
                </Button>
              </DialogContent>
            </Dialog>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CoinPage;
