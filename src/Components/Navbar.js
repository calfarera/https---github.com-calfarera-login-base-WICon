import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500',
    },
}

export default function () {
  
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try{
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <AppBar position='static' sx={{mb: 4} }>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Typography variant='h5' component={NavLink} to='/' sx={navStyles}  >
                        QURBAN
                    </Typography>

                    {user?.displayName ? (
                    <Typography onClick={handleSignOut} component={NavLink} sx={navStyles} to='/signin' >
                        Log Out
                    </Typography> ) : ( 
                    <Typography component={NavLink} to='/signin' sx={navStyles} >
                        Sign In
                    </Typography> )
                    }
                </Toolbar>
            </AppBar>
        </>
  )
}