import React, { Component } from 'react'
import FrInput from './FrInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.FRInputRef = React.createRef()
    }

    clickHandler = () =>{
        this.FRInputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FrInput ref={this.FRInputRef}/>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default FRParentInput
