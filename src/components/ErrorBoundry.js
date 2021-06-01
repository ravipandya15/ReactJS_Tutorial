import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }

    // can not log error of handler using ErrorBoundry.
    

    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    render() {
        if (this.state.hasError){
            return(
                <h1>Something Went wrong!</h1>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundry
