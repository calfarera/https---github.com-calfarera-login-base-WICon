import { Box, Button, Container, createTheme, Grid, Link, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { UserAuth } from '../../Context/AuthContext';

export default function Account() {
    const theme = createTheme();
    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try{
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ThemeProvider theme={theme} >
                <Container component='main' maxWidth='xs' >
                    <Box alignItems='center' >
                        <Typography variant='h2' align='center' sx={{mb: 6}} >
                            ACCOUNT
                        </Typography>
                    </Box>

                    <Grid component='form' container justifyContent='center' flexDirection='column' >
                        <Box display='flex' alignItems= 'center' flexDirection='column' sx={{ m: 2 }} >
                            <Typography 
                                variant='h5' 
                                sx={{ textTransform: 'uppercase', fontWeight: 'bold', mb: 2 }}
                                >
                                Welcome, {user?.displayName} !
                            </Typography>
                            <Typography variant='body2' sx={{ m: 2 }} >
                                Wants to change password? <Link to='/' >Change Password</Link>
                            </Typography>

                            <Button variant='contained' fullWidth onClick={handleSignOut} >
                                Log Out
                            </Button>
                        </Box>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    )
}
