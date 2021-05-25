import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello"
        }

        // 3rd option - best
        this.clickHandler = this.clickHandler.bind(this)
    }
    

    clickHandler(){
        //application will break
        // cannot read property setState of undefined as 'this' keyword is undefined in this method
        this.setState({
            message : "Goodbye!"
        })
       console.log(this)
    }

    // 4th option
    // clickHandler = () => {
    //     //application will break
    //     // cannot read property setState of undefined as 'this' keyword is undefined in this method
    //     this.setState({
    //         message : "Goodbye!"
    //     })
    //    console.log(this)
    // }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler}>Click me</button> */}
                {/* 1st option - not good - performance issue. will render every time */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}

                {/* 2nd option - aero function in render - also not good performance issue */}
                {/* <button onClick={() => this.clickHandler()}>Click me</button> */}

                {/* 3rd option - bind 'this' in constructor - best option*/}
                {/* <button onClick={this.clickHandler}>Click me</button> */}

                {/* 4th option - class property as aero function - clickHandler method as aero function*/}
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
