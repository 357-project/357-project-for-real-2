import React, { Component } from 'react'
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';


import GameER from 'phaser-maze-game';
import '../App.css';

class MazeGame extends Component {
    render() {
        return (
            <div className="App">
                <Container component="main" maxWidth="xs">
                <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem'}}>
                    <GameER/>
                    </Box>
                </Container>
                
            </div>
        );
    }
}

export default MazeGame;