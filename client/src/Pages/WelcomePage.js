import * as React from 'react';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';
import {Logo} from "../Components/Logo";

function HomePage(){
    return(
        <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem'}}>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                    <Typography component="h5" variant="h5">
                    Hey Kids, welcome to Code-ito! A new online platform to help you improve the way you think through a series of skill-enhancing mini-games. Put your memory, decision-making and speed to the test with our maze and memory challenges! 
                    <br/><br/>
                    If you are interested in computers, these games can help you develop ones that are important in fields of technology and computer science!
                    <br/><br/>
                    ✨ Are you up for the challenge?✨
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