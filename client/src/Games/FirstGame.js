import React, {Component} from "react";
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';


import {Game} from "../lib";

class MemoryGame extends Component {
    render() {
        return (
        //     <div className="App">
        //     <Container component="main" maxWidth="xs">
        //     <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem'}}>
        //         <Game/>
        //         </Box>
        //     </Container>
            
        // </div>
            <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem'}}>
                <Game/>
            </Box>
        );
    }
}

export default MemoryGame;