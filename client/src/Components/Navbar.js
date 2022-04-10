import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Button, AppBar, Toolbar, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem, Badge, Link, } from '@mui/material';
// import {Logo} from "../logo";
import { useEffect } from "react";

const pages = ['Home', 'Maze Game', 'Memory Game'];
const settings = ['Profile', 'Statistics', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    var [count, setCount] = React.useState(); //number of notifications set as count

    //Handles all the possiblity for the menu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
   


    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button variant="h6" noWrap component="div" href='/' sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                        <Link href='/' sx={{ color: 'white', textDecoration: 'none' }}>
                            <Typography component="h1" variant="h5">
                                Code-ito
                            </Typography>
                            
                            
                        </Link>
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
                            aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                            open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, }}>
                            {/* Displays menu bar in small screen format */}
                            <MenuItem key="Home" href="/" >
                                <Link href='/'>
                                <Typography textAlign="center">Home</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key="Maze Game" href="/MazeGame" >
                                <Link href='/MazeGame'>
                                <Typography textAlign="center">Maze Game</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key="Memory Game" href="/Memorygame" >
                                <Link href='/MemoryGame'>
                                <Typography textAlign="center">Memory Game</Typography>
                                </Link>
                            </MenuItem>
                            {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
                        </Menu> 

                    </Box>
                    <Link href='/' sx={{ color: 'white', textdecoration: 'none', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        COVID-19 App
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button key="Home" href="/"  sx={{ my: 2, color: 'white', display: 'block' }}>
                                Home
                        </Button>
                        <Button key="Maze Game" href="/MazeGame"  sx={{ my: 2, color: 'white', display: 'block' }}>
                                Maze Game
                        </Button>
                        <Button key="Memory Game" href="/Memorygame"  sx={{ my: 2, color: 'white', display: 'block' }}>
                                Memory Game
                        </Button>
                        {/* {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))} */}
                    </Box>
                        
                        <Box sx={{ flexGrow: 0 }}>
                            <Badge color="secondary" badgeContent={count}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="https://cdn.imgbin.com/2/22/6/imgbin-computer-icons-child-avatar-child-JD66g32bvXprtr3FhWy2vPSzL.jpg" />
                                    </IconButton>
                                </Tooltip>
                            </Badge>
                            {/* Displays the menu option when the avatar is pressed */}
                            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                                open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                                {/* Shows the notification button only if the doctor has notifications */}
                                {settings.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
                            </Menu>
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
