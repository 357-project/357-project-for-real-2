import React, { Component } from 'react'


import GameER from 'phaser-maze-game';
import '../App.css';

class MazeGame extends Component {
    render() {
        return (
            <div className="App">
                <GameER/>
            </div>
        );
    }
}

export default MazeGame;