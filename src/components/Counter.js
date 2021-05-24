import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment(){
        // this is not a correct way to update state as React will not render UI again. So changes will not be reflected
        // this.state.count = this.state.count + 1
        // this.setState(
        // {
        //     count : this.state.count + 1
        // },
        // () => {
        //     console.log("CallBack count is : ", this.state.count)
        // })
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count : prevState.count + 1
        }),
        () => {
            console.log("Hello World : ", this.state.count)
        })
    }

    incrementFive(){
        // this will not work as react will call increment method (all 5) in a one go
        // for that use previous state
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>Count  is {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
