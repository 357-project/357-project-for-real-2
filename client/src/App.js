import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import MazeGame from "./Games/MazeGame";
import CssBaseline from '@mui/material/CssBaseline';

import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import {Logo} from "./Authentication/logo";
import MemoryGame from "./Games/FirstGame";
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar.js';
import {TimePage} from "./Components/timePage";
import HomePage from './Pages/WelcomePage';
import Questionaire from './Pages/Questionaire';
class App extends Component {
    
    render() {
        return (
            <div>
            <Router>
                <CssBaseline/>
                    <Switch>
                        <Route path="/MazeGame">
                            <Navbar isLoggedIn={true}/>
                            <div>
                                <MazeGame/>
                            </div>
                        </Route>
                        <Route path="/Questionaire">
                        <Navbar isLoggedIn={true}/>
                            <div>
                                <Questionaire/>
                            </div>
                            
                        </Route>
                        <Route path="/SignIn">
                            <div>
                                <SignIn/>
                            </div>
                            
                        </Route>
                        <Route path="/SignUp">
                            <div>
                                <SignUp/>
                            </div>

                        </Route>
                        <Route path="/logo">
                            <Logo/>
                        </Route>
                        <Route path="/MemoryGame">
                        <Navbar isLoggedIn={true}/>
                            <div>
                                <MemoryGame/>
                            </div>
                            
                        </Route>
                        <Route
                            path="/timepage"
                            component={(props) => <TimePage {...props} />}
                        />
                        <Route path="/">
                            <div>
                                <HomePage/>
                            </div>

                        </Route>
                    </Switch>
                <br/>
            </Router>
            <Footer/>
            </div>
        );
    }
}

export default App;