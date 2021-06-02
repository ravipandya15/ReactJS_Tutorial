import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    // 2nd way
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E Context {this.context}
                <ComponentF />
            </div>
        )
    }
}
//1st way
// ComponentE.contextType = UserContext

export default ComponentE
