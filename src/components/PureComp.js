import React, { PureComponent } from 'react'
// rpce for shortcut
// frce for functional component
// rce for regular class component
class PureComp extends PureComponent {
    render() {
        return (
            <div>
                <h1>Pure component - {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp
