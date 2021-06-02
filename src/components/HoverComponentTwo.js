import React, { Component } from 'react'

class HoverComponentTwo extends Component {
    render() {
        const {count, countHandler} = this.props
        return (
            <h1 onMouseOver={countHandler}>Hover {count} Times</h1>
        )
    }
}

export default HoverComponentTwo
