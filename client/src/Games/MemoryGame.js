import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Game } from "./lib";
import { useHistory } from "react-router-dom";

function MemoryGame() {

    // Declaring all the use states and constants
    const t = new Date().getTime();
    console.log(t);
    const history = useHistory();
    const [show, setShow] = useState(true);

    // Declaring the styles and colors
    const colors = ['#70D6FF', '#629460', '#FF9770', '#FFD670', '#FFD670', '#FF9770', '#629460', '#629460'];
    const styles = colors.map((color) => {
        return {
            float: "left",
            fontSize: "50pt",
            color: color,
            fontFamily: 'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif'
        }
    })

    //clock that keeps track of the time 
    const onSubmit = () => {
        const time = Math.floor((new Date().getTime() - t) / 1000);
        history.push({
            pathname: '/timepage',
            state: { time: time }
        });
    }

    return (
        <div className="App" >
            {/* Memory Game page */}
            <Container component="main" maxWidth="xl" sx={{ marginBottom: 0, marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: show ? "block" : "none", flexDirection: 'column', alignItems: 'center', mt: '4rem' }}>
                    <h1 style={styles[0]}> ✨MEMORY GAME✨</h1>
                </Box>
                <Button size="large" variant="contained" onClick={() => setShow((s) => !s)} sx={{ marginBottom: '10px', display: show ? "block" : "none", backgroundColor: '#FFD670' }}> START</Button>
                <Box maxWidth="sm" sx={{ display: show ? "block" : "none", flexDirection: 'column', alignItems: 'center' }}>
                    {/* Shows instructions with site color scheme */}
                    <h1 style={styles[0]}>I</h1>
                    <h1 style={styles[1]}>N</h1>
                    <h1 style={styles[2]}>S</h1>
                    <h1 style={styles[3]}>T</h1>
                    <h1 style={styles[0]}>R</h1>
                    <h1 style={styles[1]}>U</h1>
                    <h1 style={styles[2]}>C</h1>
                    <h1 style={styles[3]}>T</h1>
                    <h1 style={styles[0]}>I</h1>
                    <h1 style={styles[1]}>O</h1>
                    <h1 style={styles[2]}>N</h1>
                    <h1 style={styles[3]}>S</h1>
                </Box>
                {/* Allows user to play the game */}
                <Box sx={{ marginBottom: 0, marginTop: 0, display: show ? "none" : "block", flexDirection: 'column', alignItems: 'center', mt: '14rem' }}>
                    <Game />
                </Box>
                {/* Instructions for the memory game */}
                <Box sx={{ display: show ? "block" : "none", textAlign: 'center' }} >
                    <Typography>✨</Typography>
                    <Typography>Welcome to the Memory Game! To Begin, Click on the START button to begin!</Typography>
                    <Typography>Use the mouse to click on the cards to flip them and find matching pairs</Typography>
                    <Typography>Every time you flip a none-matching pair, you must restart</Typography>
                    <Typography>Try your best to flip pairs in the least numbers of clicks and as fast you can, the clock is ticking!</Typography>
                    <Typography>Click 'CLICK WHEN DONE' to lock in your score! </Typography>
                    <Typography>✨</Typography>
                </Box>
                <Button sx={{ mt: 2, size: "large", display: show ? "none" : "block" }} size="large" variant="contained" onClick={onSubmit}>CLICK WHEN DONE</Button>
            </Container>
        </div>
    );
}

export default MemoryGame;