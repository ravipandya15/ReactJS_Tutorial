import React, { Component } from 'react'

class Counter_Render_Props extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    countHandler = () => {
        this.setState( (prevState) => {
            return {count : prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.countHandler)}
                {/* {this.props.render(this.state.count, this.countHandler)} */}
            </div>
        )
    }
}

export default Counter_Render_Props
