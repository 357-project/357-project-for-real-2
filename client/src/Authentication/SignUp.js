import * as React from 'react';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { Container, Typography, Box, Grid, Link, TextField, CssBaseline, Button, Avata, Card} from '@mui/material'
import {Logo} from "./logo";

function SignUp() {

    return (

        <Card>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <div>
                        <Logo/>
                    </div>
                    {/* Displays the sign up form */}
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            {/* Taking input from user */}
                            <Grid item xs={12} sm={6}>
                                <TextField borderColor="#629460" autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField className="textField" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className="textField" required fullWidth id="Phone Number" label="Phone Number" name="PhoneNumber" autoComplete="phone-number"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className="textField" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className="textField" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField className="textField" required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="Confirmpassword" autoComplete="new-password"/>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" href="/signin" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Card>
    );
}

export default SignUp;