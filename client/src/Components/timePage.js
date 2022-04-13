import {Box, Button, Container, Card} from "@mui/material";
import GameER from "phaser-maze-game";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Navbar from "./Navbar";

export function TimePage(props){

    return (
        <>
            <Navbar isLoggedIn={true}/>
        <Container component="main" maxWidth="md" sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <br/>
            <Card sx={{display: "flex",MarginTop: "3em", alignContent: "center"}}>
            <Box mx="6em" sx={{ MarginLeft: 6, MarginRight: 6,marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '1rem'}}>
                <AccessAlarmIcon className="clockIcon"/>
                <h1>Your time was:</h1>
                <br/>
                <h1>{props.location.state.time} Seconds</h1>
                <br/>
                <h1>Come back tomorrow</h1>
                <br/>
            </Box>
        </Card>

        <Button sx={{size: "large"}}>CLICK WHEN DONE</Button>
    </Container>
        </>
        )
}