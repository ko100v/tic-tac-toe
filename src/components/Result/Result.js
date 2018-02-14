import React, {Component} from 'react'
import './Result.css'

class Result extends Component {

    renderImage = () => {
        /* */
        const { winner } = this.props
        if (winner === true) {
            return <img className="image-result" src={require('../../assets/circle.png')}/>
        } else if (winner === false) {
            return <img className="image-result" src={require('../../assets/cross.png')}/>
        } else {
            return <img className="image-result"/>
        }
    }

    render () {
        return (
            <div className="sidebar">
                <div className="result-container">
                    <span className="text-result">{'WINNER:'}</span>
                    {this.renderImage()}
                </div>

                <button onClick={this.props.onNewGamePressed} className="new-game">  NEW GAME </button>

            </div>
        )
    }
}

export default Result
