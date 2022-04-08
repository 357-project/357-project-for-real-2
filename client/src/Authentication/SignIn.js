import * as React from 'react';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';
import {Logo} from "./logo";



//handling the login form
function SignIn() {

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginBottom: 6,marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem'}}>
                    <div>
                        <Logo/>
                    </div>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        {/* Getting the email and password from user */}
                        <Grid container>
                            <Grid item xs={12} sx={{ my: 2 }}>
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12} sx={{ my: 2 }}>
                                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" style={{backgroundColor: "#629460"}} fullWidth variant="contained" href="/MazeGame" sx={{ mt: 3, mb: 2 }}>
                                    Sign In
                                </Button>
                            </Grid>

                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/Signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}

export default SignIn;