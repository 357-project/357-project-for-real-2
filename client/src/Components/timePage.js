import {Box, Container, Card} from "@mui/material";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Navbar from "./Navbar";

export function TimePage(props){

    return (
        <>
        {/* Adding navbar to time page */}
        <Navbar isLoggedIn={true}/>
        <Container component="main" maxWidth="md" sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <br/><br/><br/>
            <Card sx={{display: "flex",MarginTop: "3em", alignContent: "center"}}>
            <Box mx="6em" sx={{ MarginLeft: 6, MarginRight: 6,marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '1rem'}}>
                {/* Display the clock and the time */}
                <AccessAlarmIcon className="clockIcon"/>
                <h1>Your time was:</h1>
                <br/>
                <h1>{props.location.state.time} Seconds</h1>
                <br/>
                <h1>Come back tomorrow</h1>
                <br/>
            </Box>
        </Card>
    </Container>
        </>
        )
}