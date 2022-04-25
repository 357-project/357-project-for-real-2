import * as React from 'react';
import {Container, Typography, Box, CssBaseline, Button} from '@mui/material';
import { Logo } from "../Components/Logo";
import {useHistory} from "react-router-dom";
import Navbar from "../Components/Navbar";

function TestInstructions() {

    const history = useHistory();

    //Indicate the we are in the test state
    const onSubmit = () => {
        history.push({
            pathname: '/mazegame',
            state: {test:  true}
        });

    }


    return (
        <>
            <Navbar isLoggedIn={true}/>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginBottom: 6, marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '20rem' }}>
                <div>
                    <Logo />
                </div>
                {/* Welcome message to the user */}
                <div>
                    <Typography component="h5" variant="h5">
                        Get Ready to play games!
                        <br /><br />
                    </Typography>
                </div>
                {/* Test instructions */}
                <div>
                    <Typography>
                        You will take the available games one after the other.
                        <br/>
                        Each game has its own instructions.
                        <br/>
                        Make sure to take note of your time when you are done each game.
                    </Typography>
                </div>
                <br />
                <Button type="submit" fullWidth variant="contained" onClick={onSubmit} sx={{ mt: 3, mb: 2 }}>
                    Start Test
                </Button>
            </Box>
        </Container>
        </>
    )
}

export default TestInstructions;