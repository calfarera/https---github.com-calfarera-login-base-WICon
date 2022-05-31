import { LockOutlined } from '@mui/icons-material';
import { 
    Avatar, Box, Button, Container, CssBaseline, 
    Grid, Link, TextField, Typography, 
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material'; 
import React, { useEffect, useState } from 'react'
import { GoogleButton } from 'react-google-button'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const Signin = () => {
    const theme = createTheme();
    const navigate = useNavigate();

    const { googleSignIn, user, signIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password);
            navigate('/account');
        } catch {
            setError(e.message);
            console.log(e.message);
        }
    };
    
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (user !== null) {
            navigate('/account');
        }
    }, [user]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component='main' maxWidth='xs' >
                    <CssBaseline />
                    <Box sx={{ 
                        mt: 10, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        boxShadow: 2,
                        width: '120%',
                        }}>
                        <Avatar sx={{ m: 2, bgcolor: '#2e8b57' }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component='h1' variant='h5' >
                            Sign In
                        </Typography>
                        
                        <Grid component='form' onSubmit={handleSubmit} container sx={{mr: 4, mb: 5, width: '90%' }} justifyContent='center' flexDirection='column' >
                            <Box display='flex' alignItems= 'center' flexDirection='column' sx={{ m: 2 }} >
                                {/* <GoogleButton onClick={handleGoogleSignIn} /> */}
                                <TextField 
                                    margin="normal"
                                    required fullWidth autoFocus
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value) }
                                />
                                <TextField 
                                    margin="normal"
                                    required fullWidth autoFocus
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value) }
                                />
                            </Box>
                            <Button 
                                fullWidth
                                type='submit'
                                variant='contained'
                                sx={{ m: 2 }}
                                > 
                                Sign In
                            </Button>

                            <Grid container display='flex' sx={{ fontSize: 16, ml: 2 }} >
                                <Grid item xs>
                                    <Link href='/' >
                                        Forgot Password?
                                    </Link>
                                </Grid>
                                <Grid item >
                                Don't have an account?
                                    <Link href='/signup' >
                                        Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box 
                        display='flex'
                        alignItems='center' 
                        flexDirection='column' 
                        sx={{ mt: 2, p: 4, boxShadow: 3, width: '120%' }}
                        >
                        <Typography variant='h6' align='center' sx={{ mb: 2, fontSize: 20 }} >
                            You can sign in by using Google Account, click below!
                        </Typography>
                        <GoogleButton onClick={handleGoogleSignIn} />
                    </Box>
                </Container>
            </ThemeProvider>
        </>
  )
};

export default Signin;