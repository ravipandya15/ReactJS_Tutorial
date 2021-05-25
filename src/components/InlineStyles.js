import React from 'react'

const headingStyle = {
    fontSize : '72px',
    color : 'blue'
}

function InlineStyles() {
    return (
        <div>
            <h1 style={headingStyle}>Heading</h1>
        </div>
    )
}

export default InlineStyles
