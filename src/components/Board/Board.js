import React, { Component } from 'react'
import './Board.css'

import Row from '../Row/Row'
import { gameCheck } from '../../helpers/GameValidator' 

class Board extends Component {
    
    componentDidUpdate(nextProps, nextState) {
        /* */
        if (nextProps.shouldReset) {
            this.setState({
                game: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                ],
                sign: false
            })

            nextProps.onReset()
        }
        /* */
        const { game } = this.state
        gameCheck(game, (winner) => {
            this.props.onWin(winner)
        })
    }

    /**
     *  
     */
    constructor() {
        super()
        /* */
        this.state = {
            game: [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ],
            sign: false
        }
    }




    /**
     * 
     */
    onRowItemPressed = (r, i) => {
        /**
         * 
         */
        this.setState({
            game: this.state.game.map((row, rowIndex) => {
                return row.map((item, itemIndex) => {
                    if (r === rowIndex && i === itemIndex) {
                        if (item === null) {
                            return this.state.sign
                        } else {
                            return item
                        }
                    } else {
                        return item
                    }
                })
            }),
            sign: !this.state.sign
        })

    }

    /**
     * 
     */
    renderRows = () => {
        /* */
        const { game } = this.state
        /* */
        return game.map((row, index) => {
            return (
                <Row
                key={index}
                index={index}
                row={row} 
                onRowItemPressed={(row, index) => this.onRowItemPressed(row, index)} />
            )
        })   
    }



    /**
     * 
     */
    render() {
        /* */
        return (
            <div className="container">

                <h1 className="header">tic-tac-toe</h1>

                {this.renderRows()}

            </div>
        )
    }
}

export default Board

