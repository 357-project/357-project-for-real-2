import * as React from 'react';
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';
import {Logo} from "../Components/Logo";

function LoggedInHomePage(){
    return(
        <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '30rem'}}>
                    <div>
                        <Logo/>
                    </div>
                    <div>
                    <Typography component="h5" variant="h5">
                    Hey Kids, welcome to Code-ito! A new online platform to help you improve the way you think through a series of skill-enhancing mini-games. Put your memory, decision-making and speed to the test with our maze and memory challenges! 
                    <br/><br/>
                    If you are interested in computers, these games can help you develop ones that are important in fields of technology and computer science!
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