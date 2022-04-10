import * as React from 'react';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';
import {Logo} from "../Authentication/logo";

function HomePage(){
    return(
        <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem'}}>
                    <div>
                    <Typography component="h2" variant="h2">
                        Welcome to
                    </Typography>
                    </div>
                    <br/>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                    <Typography component="h5" variant="h5">
                        The best place to learn basic programming skills that will allow you to become an amazing computer scientist in the future.
                        Before we get started, don't forget to Sign in or sign up if you do not have an account!
                    </Typography>
                    </div>
                    <br/>
                    <Grid container>
                            <Grid item xs={6}>
                                <Button type="submit" style={{backgroundColor: "#FF9770"}} fullWidth variant="contained" href="/Signin" sx={{ mt: 3, mb: 2, mr: 10 }}>
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button type="submit" style={{backgroundColor: "#FFD670"}} fullWidth variant="contained" href="/Signup" sx={{ mt: 3, mb: 2 }}>
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    
                </Box>
        </Container>
    )

    

}

export default HomePage;