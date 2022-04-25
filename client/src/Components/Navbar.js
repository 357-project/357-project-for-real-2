import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Button, AppBar, Toolbar, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem, Badge, Link } from '@mui/material';

//Declaring pages you can access from navbar
const pages = ['MazeGame', 'MemoryGame'];
const settings = ['Profile', 'Statistics', 'Logout'];
const ConstantDate = new Date('01-01-2022');

function Navbar(props) {
    //one menu for desktop and one for phone format
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    console.log(props)

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
    
    //Finds which day we are to showcase the correct game when pressing daily game
    const inDays = (d1, d2) => {
        const t2 = d2.getTime();
        const t1 = d1.getTime();
        return parseInt(((t2-t1)/(24*3600*1000)));
    }
    const DailyGame = pages[Math.abs((inDays(ConstantDate,new Date()))% 2)];

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button variant="h6" noWrap component="div" href='/' sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} >
                        {/* Displays the name of app as the header of Navbar */}
                        <Link href='/home' sx={{ color: 'white', textDecoration: 'none' }}>
                            <Typography component="h1" variant="h5">
                                Code-ito
                            </Typography>
                        </Link>
                    </Button>
                    {/* Phone format for the navbarhamburger menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
                            aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        {/* Displays all options you can press */}
                        <Menu id="menu-appbar" anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                            open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, }}>
                            {/* Displays menu bar in small screen format */}
                            <MenuItem key="Home" href="/home" >
                                <Link href='/home'>
                                    <Typography textAlign="center">Home</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key="Daily Game" href="/MazeGame" >
                                <Link href={DailyGame}>
                                    <Typography textAlign="center">Daily Game</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key="Test" href="/testInstructions" >
                                <Link href="/testInstructions">
                                    <Typography textAlign="center">Test</Typography>
                                </Link>
                            </MenuItem>
                        </Menu> 

                    </Box>
                    {/* Shows the navbar in big screen */}
                    <Link href='/home' sx={{ color: 'white', textdecoration: 'none', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        Code-ito
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button key="Home" href="/home"  sx={{ my: 2, color: 'white', display: 'block' }}>
                                Home
                        </Button>
                        <Button key="Daily Game" href={DailyGame}  sx={{ my: 2, color: 'white', display: 'block' }}>
                                Daily Game
                        </Button>
                        <Button key="Test" href="/testInstructions"  sx={{ my: 2, color: 'white', display: 'block' }}>
                            Test
                        </Button>
                    </Box>
                        {/* Displays the avatar of the user */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Badge color="secondary">
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
