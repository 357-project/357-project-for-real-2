import * as React from 'react';
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';
import {Logo} from "../Components/Logo";

function LoggedInHomePage(){
    return(
        <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem'}}>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                    <Typography component="h5" variant="h5">
                        The best place to learn basic programming skills that will allow you to become an amazing computer scientist in the future.
                        Before we get started, don't forget to Sign in or sign up if you do not have an account!
                    </Typography>
                    </div>
                    <br/><br/>
                    <div>
                    <Typography component="h5" variant="h5">
                        Congratulations on completing today's challenge! Please come back tomorrow for a brand new challenge.
                    </Typography>
                    </div>
                    <br/><br/><br/>
                </Box>
        </Container>
    )

    

}

export default LoggedInHomePage;