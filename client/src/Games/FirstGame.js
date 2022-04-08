import React, {Component} from "react";
import { Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Card } from '@mui/material';


import {Game} from "../lib";

class MemoryGame extends Component {
    render() {
        return (
            <div className="App">
                <Game/>
            </div>
        );
    }
}

export default MemoryGame;