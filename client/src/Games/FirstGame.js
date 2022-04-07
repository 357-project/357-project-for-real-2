import React, {Component} from "react";

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