import { Box, Container, Grid, ThemeProvider, CssBaseline, 
  createTheme, TextField, Typography, Button, Link, Avatar 
} from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

export default function Register() {
  const theme = createTheme();
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate('/account');
    } catch {
      setError(e.message);
      console.log(e.message);
    }
  }  
  
  return (
    <>
      <ThemeProvider theme={theme} >
        <Container component='main' maxWidth='xs' >
          <CssBaseline />
          <Box sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            boxShadow: 3,
            textAlign: 'center',
          }} >
            <Typography component='h1' variant='h4' sx={{mb: 2}} >
              Register New Account
            </Typography>
            <Typography component='h3' variant='h6' sx={{mb: 2}} >
              Sign Up to create a new account to access the website!
            </Typography>
          </Box>
          <Box sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            boxShadow: 3,
            textAlign: 'center',
          }} >
            <Avatar sx={{ m:1, bgcolor: 'primary.main' }} >
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h4' >
                Sign Up
            </Typography>
            
            <Box component='form' onSubmit={handleSubmit} >
                <Grid container spacing={2} >
                  <Grid item xs={12} sm={6} >
                    <TextField 
                      margin="normal"
                      required fullWidth autoFocus
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} >
                    <TextField 
                      margin="normal"
                      required fullWidth autoFocus
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField 
                      margin="normal"
                      required fullWidth autoFocus
                      id="email"
                      label="Insert Email Address"
                      name="email"
                      autoComplete="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value) }
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField 
                      margin="normal"
                      required fullWidth autoFocus
                      id="password"
                      label="Password"
                      name="password"
                      autoComplete="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />        
                  </Grid>
                  <Button 
                    fullWidth
                    type='submit'
                    variant='contained'
                    sx={{ mt: 2, ml: 2 }}
                  >
                    Register
                  </Button>

                  <Grid container justifyContent="flex-end" sx={{ mt: 2 }} >
                    <Grid item>
                      <Typography variant='body2' > 
                        Already have an account?
                        <Link href='/signin' variant="body2">
                          Sign in
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>  
            </Box>
          </Box>
        </Container>        
      </ThemeProvider>
    </>
  )
}
