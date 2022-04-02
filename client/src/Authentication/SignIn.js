import * as React from 'react';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar } from '@mui/material';



//handling the login form
function SignIn() {
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOpenTwoToneIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        {/* Getting the email and password from user */}
                        <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                        <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password"/>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" href="/MazeGame" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
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
        </>
    );
}

export default SignIn;