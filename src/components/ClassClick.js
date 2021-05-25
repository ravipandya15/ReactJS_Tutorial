import React, { Component } from 'react'

class ClassClick extends Component {
    ClassClickEventHandler(){
        console.log("Class button click")
    }
    render() {
        return (
            <div>
                <button onClick={this.ClassClickEventHandler}>ClassClick</button>
            </div>
        )
    }
}

export default ClassClick