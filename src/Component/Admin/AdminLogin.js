import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"; // Import toast
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
});

const initialValues = {
  email: '',
  password: '',
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post('http://localhost:8000/auth/loginAdmin', values)
      .then((response) => {
        console.log('Sign in successful:', response.data);
        if (response.data.token) {
          sessionStorage.setItem('adminToken', response.data.token);
        }
        navigate("/admin")
      })
      .catch((error) => {
        console.error("Sign in failed:", error.response.data);
        toast.error("Failed to log in. Please check your credentials.", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <ToastContainer/>
      <Box
        sx={{
          backgroundColor: '#000', // Black background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: '20%', // At least 20% padding from all sides
        }}
      >
        <Card sx={{ backgroundColor: '#45f884' }}>
          <CardContent>
            <Grid container>
              <CssBaseline />
              <Grid item xs={12} md={6}>
                {/* Your image here */}
                <img
                  src="https://img.freepik.com/free-vector/character-playing-videogame_52683-36686.jpg?w=740&t=st=1697111280~exp=1697111880~hmac=528346101d1416ce99c0266419968bb3d0275a73f97ea3b8d0971ef48ab3270e"
                  alt="Background"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    my: 4,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Admin Sign in
                  </Typography>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <Field
                        as={TextField}
                        name="email"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                      />
                      <ErrorMessage name="email" component="div" />

                      <Field
                        as={TextField}
                        name="password"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                      />
                      <ErrorMessage name="password" component="div" />

                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>

                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Form>
                  </Formik>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default AdminLogin;
