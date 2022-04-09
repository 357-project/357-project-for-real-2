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
            <Navbar/>
            <div>
            <Router>
                <CssBaseline/>
                    <Switch>
                        <Route path="/MazeGame">
                            <MazeGame/>
                        </Route>
                        <Route path="/Questionaire">
                            <Questionaire/>
                        </Route>
                        <Route path="/SignIn">
                            <SignIn/>
                        </Route>
                        <Route path="/SignUp">
                            <SignUp/>
                        </Route>
                        <Route path="/logo">
                            <Logo/>
                        </Route>
                        <Route path="/MemoryGame">
                            <MemoryGame/>
                        </Route>
                        <Route
                            path="/timepage"
                            component={(props) => <TimePage {...props} />}
                        />
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                <br/>
            </Router>
            </div>
            <Footer/>
            </div>
        );
    }
}

export default App;