/**
 * 
 */
import React, { Component } from 'react'
import './Item.css'

/**
 * 
 */
class Item extends Component {

    /**
     * 
     */
    renderImage = () => {
        /* */
        const { item } = this.props
        /* */
        if (item === true) {
            return (
                <img className="image" src={require("../../assets/circle.png")} border="0" />
            )
        } else if (item === false) {
            return (
                <img className="image" src={require("../../assets/cross.png")} border="0" />
            )
        } else {
            return null
        }
    }

    onClick = () => {
        /* */
        const { index, onItemClicked } = this.props
        /* */
        onItemClicked(index)
    }

    /**
     * 
     */
    render() {
        /* */
        const { item } = this.props
        /* */
        return (
            <button 
            className="item" 
            onClick={this.onClick}
            disabled={item !== null}
            >

            {this.renderImage()}

            </button>
        )
    }
} 

export default Item