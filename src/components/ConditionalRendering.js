import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        // 1st approach - if/else
        // if (this.state.isLoggedIn){
        //     return (<div><div>Welcome Ravi Pandya!</div></div>)
        // }else{
        //     return (<div><div>Welcome Guest</div></div>)
        // }

        // 2nd approach - Element Variables
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Ravi Pandya!</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return (<div>{message}</div>)

        // 3rd approach - Ternary Condition

        return this.state.isLoggedIn
            ? <div>Welcome Ravi Pandya!</div>
            : <div>Welcome Guest</div>

        // 4th approach - Short circuit operator - only use for if statement
        // if first argument is true then and then evaluate 2nd argument otherwise not
        // return this.state.isLoggedIn && <div>Welcome Ravi Pandya!</div>
    }
}

export default ConditionalRendering
