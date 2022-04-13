import React, { Component } from 'react'
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';
import { useHistory } from "react-router-dom";

import GameER from 'phaser-maze-game';
import '../App.css';
import {TimePage} from "../Components/timePage";

function MazeGame(){

    const t = new Date().getTime();
    console.log(t);
    const history = useHistory();

    const onSubmit = ()=> {
        const time = ((new Date().getTime() - t) / 1000);
        history.push({
            pathname: '/timepage',
            state: {time: time}
        });
    }

        return (
                <div className="App">
                <Container component="main" maxWidth="xs" sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Card>
                        <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '14rem', mb:'1rem'}}>
                            <GameER/>
                        </Box>
                    </Card>
                    <Button sx={{size: "large"}} size="large" variant="contained" onClick={onSubmit}>CLICK WHEN DONE</Button>
                </Container>
            </div>

        );
}

export default MazeGame;