import * as React from 'react';
import { Container, Typography, Box, Grid, Link, TextField, CssBaseline, Button } from '@mui/material';
import { Logo } from "../Components/Logo";
import GetDailyGame from "../Games/DailyGame";



//handling the login form
function SignIn() {

    const game = GetDailyGame();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {/* Display Sign in page */}
            <Box sx={{ marginBottom: 6, marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15rem' }}>
                {/* Shows Code-ito Logo */}
                <div>
                    <Logo />
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
                            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" style={{ backgroundColor: "#629460" }} fullWidth variant="contained" href={game} sx={{ mt: 3, mb: 2 }}>
                                Sign In
                            </Button>
                        </Grid>

                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            {/* Allows user to reset a password if they forgot it */}
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            {/* Easy navigation to sign up page */}
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