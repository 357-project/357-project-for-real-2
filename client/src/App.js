import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import MazeGame from "./Games/MazeGame";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import {Logo} from "./Authentication/logo";
import MemoryGame from "./Games/FirstGame";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/MazeGame">
                            <MazeGame/>
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
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;