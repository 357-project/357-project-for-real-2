import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MazeGame from "./Games/MazeGame";
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

// Importing all the pages and components needed
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import MemoryGame from "./Games/MemoryGame";
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar.js';
import HomePage from './Pages/WelcomePage';
import LoggedInHomePage from './Pages/LoggedInWelcomePage';
import Questionaire from './Pages/Questionaire';
import { Logo } from "./Components/Logo";
import { TimePage } from "./Components/timePage";
class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <CssBaseline />
                    <Switch>
                        {/* Routes for every page that can be reached on the website */}
                        <Route path="/MazeGame">
                            <Navbar isLoggedIn={true} />
                            <div>
                                <MazeGame />
                            </div>
                        </Route>
                        <Route path="/Questionaire">
                            <Navbar isLoggedIn={true} />
                            <div>
                                <Questionaire />
                            </div>
                        </Route>
                        <Route path="/home">
                            <Navbar isLoggedIn={true} />
                            <div>
                                <LoggedInHomePage />
                            </div>
                        </Route>
                        <Route path="/SignIn">
                            <div>
                                <SignIn />
                            </div>
                        </Route>
                        <Route path="/SignUp">
                            <div>
                                <SignUp />
                            </div>
                        </Route>
                        <Route path="/MemoryGame">
                            <Navbar isLoggedIn={true} />
                            <div>
                                <MemoryGame />
                            </div>
                        </Route>
                        <Route path="/logo">
                            <Logo />
                        </Route>
                        <Route path="/timepage" component={(props) => <TimePage {...props} />} />
                        <Route path="/">
                            <div>
                                <HomePage />
                            </div>
                        </Route>
                    </Switch>
                    <br />
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;