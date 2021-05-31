import React, { Component } from 'react'
import Input from './Input'

class ParentFocus extends Component {
    constructor(props) {
        super(props)
        
    this.ParentFocusRef = React.createRef()
    }

    clickHandler = () =>{
        this.ParentFocusRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.ParentFocusRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default ParentFocus
