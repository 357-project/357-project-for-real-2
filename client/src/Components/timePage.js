import {Box, Container, Card, Button} from "@mui/material";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Navbar from "./Navbar";

export function TimePage(props){
    let nextLink = "/home";
    let buttonText = "Go Home";
    console.log(props)
    if(props.location.state.test){
        nextLink = "/memorygame";
        buttonText = "Next Game";
    }
    return (
        <>
        {/* Adding navbar to time page */}
        <Navbar isLoggedIn={true}/>
            <br/>
        <Container component="main" maxWidth="md" sx={{ marginBottom: 5,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
            <Button type="submit" fullWidth variant="contained" href={nextLink} sx={{ mt: 3, mb: 2, maxWidth: '20em' }}>
            {buttonText}
            </Button>
    </Container>
        </>
        )
}