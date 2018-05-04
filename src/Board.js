import React, { Component } from 'react';
import TaskTile from './TaskTile';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        
        this.createTask = this.createTask.bind(this);
    }

    // Board actions
    createTask() {
        this.props.actions.createTask();
    }

    render() {
        return (
            <div className="Board">
                <div className="Board-actions">
                    <button className="Board-action-button" onClick={this.createTask}>
                        Create task
                    </button>
                </div>
                <div className="Board-tiles">
                    {this.props.tasks.map(it => <TaskTile task={it} />)}
                </div>
            </div>
        )
    }
}

export default Board;