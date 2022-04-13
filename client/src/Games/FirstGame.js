import React, {Component} from "react";
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';


import {Game} from "../lib";
import {useHistory} from "react-router-dom";
import GameER from "phaser-maze-game";

function MemoryGame(){

    const t = new Date().getTime();
    console.log(t);
    const history = useHistory();

    const onSubmit = ()=> {
        const time = Math.floor((new Date().getTime() - t) / 1000);
        history.push({
            pathname: '/timepage',
            state: {time: time}
        });
    }

    return (
        <div className="App">
            <Container component="main" maxWidth="xs" sx={{ marginBottom: 0,marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ marginBottom: 0,marginTop: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '14rem', mb:'1rem'}}>
                        <Game/>
                    </Box>
                <Button sx={{size: "large"}} size="large" variant="contained" onClick={onSubmit}>CLICK WHEN DONE</Button>
            </Container>
        </div>

    );
}

export default MemoryGame;