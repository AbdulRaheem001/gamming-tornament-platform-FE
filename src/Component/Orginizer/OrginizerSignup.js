import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Navbar from '../Commen/Navbar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const defaultTheme = createTheme();

const OrginizerSignup = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/,
        'Password must include at least one lowercase letter, one uppercase letter, one number, and one special character'
      ),
    country: Yup.string().required('Country is required'),
    phoneNumber: Yup.string()
      .matches(
        /^[0-9]{11}$/,
        'Phone Number must be 11 digits'
      )
      .required('Phone Number is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    phoneNumber: '',
    rol: ''
  };

  const navigate = useNavigate();

  const onSubmit = (values) => {
    values.role = 'organizer';
    axios
      .post('http://localhost:8000/auth/register', values)
      .then((response) => {
        console.log('Registration successful:', response.data);

        setSnackbarOpen(true); // Open Snackbar on successful registration
        
        // Delay the redirection to the sign-in page
        setTimeout(() => {
          
          navigate('/orginizerLogin'); // Redirect to login page after a delay
        }, 2000); // Adjust the delay time (in milliseconds) as needed
      })
      .catch((error) => {
        console.error('Registration failed:', error.response.data);
      });
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-photo/small-house-with-purple-flower-pot-middle_1340-37181.jpg?t=st=1697117975~exp=1697121575~hmac=d940aba0a8e56ed61b6c034230e2c3925e9d65f251b42b4c674f7af9183e5d09&w=360)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#45f884' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Organizer Sign up
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <Field
                  as={TextField}
                  name="firstName"
                  margin="normal"
                  required
                  fullWidth
                  label="First Name"
                />
                <ErrorMessage name="firstName" component="div" />

                <Field
                  as={TextField}
                  name="lastName"
                  margin="normal"
                  required
                  fullWidth
                  label="Last Name"
                />
                <ErrorMessage name="lastName" component="div" />

                <Field
                  as={TextField}
                  name="email"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
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
                />
                <ErrorMessage name="password" component="div" />

                <Field
                  as={TextField}
                  name="country"
                  margin="normal"
                  required
                  fullWidth
                  label="Country"
                />
                <ErrorMessage name="country" component="div" />

                <Field
                  as={TextField}
                  name="phoneNumber"
                  margin="normal"
                  required
                  fullWidth
                  label="Phone Number"
                />
                <ErrorMessage name="phoneNumber" component="div" />

                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions, and updates via email."
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>

                <Grid container>
                  <Grid item>
                    <Link href="/orginizerLogin" variant="body2">
                      {"Have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust the duration as needed
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success">
          Registration Successful!
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default OrginizerSignup;
