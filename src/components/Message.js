import react , { Component } from 'react'

class Message extends Component{

    constructor() {
        super()
        this.state = {
            message : "Hello Visitors!"
        }
    }

    subScribe(){
        this.setState({
            message : "Thank you for subscribing!"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.subScribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message