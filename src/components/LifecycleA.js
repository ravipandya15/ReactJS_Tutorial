import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'LifeCycleA'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    updateState = () => {
        this.setState({
            name : 'Ravi Pandya'
        })
        console.log('UpdateState called')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <LifecycleB />
                <h1>Hello {this.state.name}</h1>
                <button onClick={this.updateState}>Update State</button>
            </div>
        )
    }
}

export default LifecycleA
