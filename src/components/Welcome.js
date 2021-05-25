import React , { Component } from 'react'

class Welcome extends Component{
    render() {
        //destructuring props
        const {name, heroName} = this.props
        // destructuring states
        // const {state1, state2} = this.state
        return (
            <div>
                {/* <h1>Class Component welcomes {this.props.name} a.k.a 
                {this.props.heroName}</h1>
                {this.props.children} */}
                <h1>Class Component welcomes {name} a.k.a {heroName}</h1>
                {/* {this.props.children} */}
            </div>
            
        )
    }
}

export default Welcome