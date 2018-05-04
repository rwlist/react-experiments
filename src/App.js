import React, { Component } from 'react';
import Bottom from './Bottom';
import Board from './Board';
import deepMerge from 'deep-merge';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastId: 0,
            tasks: [

            ]
        };
    }

    render() {
        return (
            <div className="App-content">
                <div className="App-main">
                    <Board tasks={this.state.tasks}/>
                </div>
                <Bottom />
            </div>
        );
    }
}

export default App;
