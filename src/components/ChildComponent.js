import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.eventHandler('child')}>Child button</button>
        </div>
    )
}

export default ChildComponent
