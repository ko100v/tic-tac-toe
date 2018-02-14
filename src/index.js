import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * 
 */
import Board from './components/Board/Board'
import Result from './components/Result/Result'

 /**
  * 
  */
class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            winner: null,
            shouldReset: false
        }
    }

    onWin = (winner) => {
        if (this.state.winner !== winner) {
            this.setState({
                ...this.state,
                winner: winner
            })
        } 
    }

    newGamePressed = () => {
        this.setState({
            winner: null,
            shouldReset: true
        })  
    }

    onReset = () => {
        this.setState({
            winner: null,
            shouldReset: false
        })  
    }

    render() {
        return (
        	<div className="wrapper">
            	<Board onWin={this.onWin} shouldReset={this.state.shouldReset} onReset={this.onReset}/>
            	<Result
                winner={this.state.winner}
                onNewGamePressed={this.newGamePressed}
                />
            </div>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('root'));
  