import * as React from 'react';
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

function PasswordStrength(password) {
  // Define your password strength criteria here
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  if (
    password.length >= 8 &&
    hasLowerCase &&
    hasUpperCase &&
    hasNumbers &&
    hasSpecialChar
  ) {
    return 'strong';
  } else {
    return 'weak';
  }
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    phoneNumber: '',
  });

  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateForm();
  };

  const validateForm = () => {
    const isValid =
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.password !== '' &&
      formData.country !== '' &&
      formData.phoneNumber !== '';
    setIsFormValid(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        country: formData.country,
        phoneNumber: formData.phoneNumber,
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}   // Change xs value to take full width
          sm={8}    // Change sm value to take 50% width on larger screens
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoFocus
                value={formData.firstName}
                onChange={handleChange}
                variant='standard'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant='standard'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                variant='standard'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                variant='standard'
                InputProps={{
                  endAdornment: (
                    <Typography color={PasswordStrength(formData.password) === 'strong' ? 'success' : 'error'}>
                      {PasswordStrength(formData.password) === 'strong' ? 'Strong' : 'Weak'}
                    </Typography>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
                value={formData.country}
                onChange={handleChange}
                variant='standard'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="phoneNumber"
                name="phoneNumber"
                autoComplete="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                variant='standard'
              />
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions, and updates via email."
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isFormValid}
              >
                Sign Up
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


