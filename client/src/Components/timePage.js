import {Box, Button, Container} from "@mui/material";
import GameER from "phaser-maze-game";
import React from "react";


export function TimePage(props){

    return (  <Container component="main" maxWidth="xs" sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '1rem'}}>
            <h1>Your time was:</h1>
            <br/>
            <h1>{props.location.state.time} Seconds</h1>
        </Box>
        <Button sx={{size: "large"}}>CLICK WHEN DONE</Button>
    </Container>)
}