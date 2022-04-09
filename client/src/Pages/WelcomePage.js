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
                        <Logo/>
                    </div>
                    <Typography component="h1" variant="h5">
                        Welcome
                    </Typography>
                </Box>
        </Container>
    )

    

}

export default HomePage;