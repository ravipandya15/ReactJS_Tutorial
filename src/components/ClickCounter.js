import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    render() {
        const {count, incrementHandler} = this.props
        return (
            <div>
                <button onClick={incrementHandler}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
