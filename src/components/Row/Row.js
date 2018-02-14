/**
 * 
 */
import React, { Component } from 'react'
import './Row.css'

import Item from '../Item/Item'

/**
 * 
 */
class Row extends Component {

    /**
     * 
     */
    onItemClicked = (itemIndex) => {
        /* */
        const { index, onRowItemPressed } = this.props
        /* */
        onRowItemPressed(index, itemIndex)
    }

    /**
     * 
     */
    renderItems = () => {
        /* */
        const { row } = this.props
        /* */
        return row.map((item, index) => {
            return (
                <Item
                key={index}
                index={index}
                item={item}
                onItemClicked={(index) => this.onItemClicked(index)}
                />
            )
        })
    }

    /**
     * 
     */
    render() {
        /* */
        /* */
        return (
            <div className="row">

                {this.renderItems()}

            </div>
        )
    }
} 

export default Row